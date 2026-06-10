import React, { useState, useRef, useCallback, useEffect, useLayoutEffect } from 'react'

// data
import testimonialData from '../../data/testimonials.json'

// constants
import imgList from '../../constants/img'

// Strip the hard-coded <br/> line breaks so copy reflows naturally on any width.
const cleanContent = (html) => (html || '').replace(/<br\s*\/?>/gi, ' ')

const AUTO_SLIDE_MS = 6000
const ANIM_MS = 500 // must match the transition duration below
const TOP_PAD = 28    // space above the (leveled) header
const BOTTOM_PAD = 28 // space below the quote
const GAP = 16        // gap between header and quote area

const total = testimonialData.length
// Clone last at the front and first at the end so the track can loop seamlessly:
// [ lastClone, ...real, firstClone ]. Real slide i lives at track position i + 1.
const slides = [
  testimonialData[total - 1],
  ...testimonialData,
  testimonialData[0],
]

function TestimonialsNew() {
  // position is the index within `slides` (0..total+1). Real slides are 1..total.
  const [position, setPosition] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [boxHeight, setBoxHeight] = useState(null)

  const touchStartX = useRef(null)
  const paused = useRef(false)
  const headerRefs = useRef([])
  const quoteRefs = useRef([])

  const next = useCallback(() => setPosition((p) => p + 1), [])
  const prev = useCallback(() => setPosition((p) => p - 1), [])
  const goTo = useCallback((realIndex) => setPosition(realIndex + 1), [])

  // When an animated/auto slide lands on a clone, snap (without animation) back to
  // the matching real slide so the loop is seamless. Driven by a TIMER rather than
  // the transitionend event, because transitionend does NOT fire while the tab is
  // backgrounded — which previously let `position` run away unbounded (translateX
  // ended up thousands of % off and the box went blank). Using >= / <= also makes it
  // self-correct if position ever overshoots.
  useEffect(() => {
    if (position >= total + 1 || position <= 0) {
      const target = position <= 0 ? total : 1
      const id = setTimeout(() => {
        setAnimate(false)
        setPosition(target)
      }, ANIM_MS + 50)
      return () => clearTimeout(id)
    }
  }, [position])

  // Re-enable animation after a snap, once the no-transition jump has painted.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [animate])

  // Box height = tallest header + tallest quote (+ fixed padding). This keeps the
  // header leveled across slides while the quote centers in the space below.
  const measure = useCallback(() => {
    const maxHeader = Math.max(0, ...headerRefs.current.map((el) => (el ? el.offsetHeight : 0)))
    const maxQuote = Math.max(0, ...quoteRefs.current.map((el) => (el ? el.offsetHeight : 0)))
    if (maxHeader || maxQuote) {
      setBoxHeight(TOP_PAD + maxHeader + GAP + maxQuote + BOTTOM_PAD)
    }
  }, [])

  useLayoutEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // Re-measure once webfonts have settled (Courier can shift text height on load).
  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure)
    }
  }, [measure])

  // Auto-advance, paused on hover / touch.
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setPosition((p) => p + 1)
      }
    }, AUTO_SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  const handleTouchStart = (e) => {
    paused.current = true
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current
      if (deltaX > 50) prev()
      else if (deltaX < -50) next()
      touchStartX.current = null
    }
    paused.current = false
  }

  // Which real testimonial is showing (for the dot indicators).
  const activeDot = ((position - 1) % total + total) % total

  // Clamp the translated position so a stray value can never push the track into
  // empty space (belt-and-suspenders alongside the snap effect above).
  const displayPosition = Math.max(0, Math.min(position, total + 1))

  return (
    <section className="container mx-auto my-24 px-4 md:px-6">
      <h2 className="text-3xl font-bold text-title text-center mb-12">
        What people say
      </h2>

      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={() => { paused.current = true }}
        onMouseLeave={() => { paused.current = false }}
      >
        {/* Arrow controls (hidden on small screens, swipe instead) */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 lg:-translate-x-20 z-10 items-center justify-center h-11 w-11 rounded-full bg-bg2 text-content hover:text-primary transition-colors focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 lg:translate-x-20 z-10 items-center justify-center h-11 w-11 rounded-full bg-bg2 text-content hover:text-primary transition-colors focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Viewport: fixed height, so the layout never scrolls or jumps */}
        <div
          className="overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding track */}
          <div
            className={`flex ${animate ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${displayPosition * 100}%)` }}
          >
            {slides.map((item, ind) => (
              <div
                key={ind}
                style={{ height: boxHeight || undefined, paddingTop: TOP_PAD, paddingBottom: BOTTOM_PAD }}
                className="w-full flex-shrink-0 bg-bg2 px-6 md:px-12 flex flex-col items-center text-center"
              >
                {/* Header — stays leveled across every slide */}
                <div
                  ref={(el) => { headerRefs.current[ind] = el }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={imgList.testimonials[item.avatarUrl]}
                    alt={item.title}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-[5px] ring-primary/40 flex-shrink-0"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-content mt-4 md:mt-6">{item.title}</h3>
                  <h4 className="text-sm md:text-base italic text-content/60 mt-1">{item.designation}</h4>
                </div>

                {/* Quote — centered in the remaining space, so its placement shifts with length */}
                <div className="relative flex-1 flex items-center w-full" style={{ marginTop: GAP }}>
                  {/* Decorative opening quotation mark behind the text */}
                  <span
                    aria-hidden="true"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    className="pointer-events-none select-none absolute top-0 left-0 -translate-y-2 lg:-translate-y-10 text-[9rem] md:text-[12rem] leading-none text-primary/30"
                  >
                    &ldquo;
                  </span>
                  <p
                    ref={(el) => { quoteRefs.current[ind] = el }}
                    className="relative text-sm md:text-base leading-snug md:leading-relaxed text-content/90 max-w-2xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: cleanContent(item.content) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center flex-wrap gap-2 mt-6">
          {testimonialData.map((t, ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => goTo(ind)}
              aria-label={`Go to testimonial ${ind + 1}`}
              className={`h-2 rounded-full transition-all focus:outline-none ${
                ind === activeDot ? 'w-6 bg-primary' : 'w-2 bg-content/30 hover:bg-content/50'
              }`}
            />
          ))}
        </div>

        <p className="text-xs text-content/40 text-center mt-4 md:hidden">
          swipe for more testimonials
        </p>
      </div>
    </section>
  )
}

export default TestimonialsNew
