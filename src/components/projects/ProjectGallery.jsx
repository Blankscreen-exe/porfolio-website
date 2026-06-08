import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Fullscreen image viewer. Controlled via `openIndex`: a number opens the gallery
// at that image, `null` closes it. Calls `onClose` when dismissed (ESC/backdrop/button).
function ProjectGallery({ images, openIndex, onClose, title = '' }) {
  const ref = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (openIndex !== null && openIndex !== undefined) {
      setIndex(openIndex)
      if (!ref.current?.open) ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [openIndex])

  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length)
  const next = () => setIndex((p) => (p + 1) % images.length)

  return (
    <dialog ref={ref} className="modal" onClose={onClose}>
      <div className="modal-box bg-black/95 max-w-full w-full h-full max-h-full p-0 m-0 rounded-none flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 btn btn-sm btn-circle border-none bg-black/40 text-white hover:bg-black/60 min-h-[44px] min-w-[44px]"
            aria-label="Close fullscreen"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 z-20 btn btn-sm btn-circle border-none bg-black/40 text-white hover:bg-black/60 min-h-[44px] min-w-[44px]"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 z-20 btn btn-sm btn-circle border-none bg-black/40 text-white hover:bg-black/60 min-h-[44px] min-w-[44px]"
                aria-label="Next image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          {images[index] && (
            <img
              src={images[index]}
              className="max-w-full max-h-full object-contain"
              alt={`${title} - Image ${index + 1}`}
            />
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {index + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  )
}

ProjectGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
}

export default ProjectGallery
