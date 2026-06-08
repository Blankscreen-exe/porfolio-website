import React from 'react'

// data
import projectList from '../../data/projectList.json'

// helpers
import { truncateText } from '../../helpers/common'

// constants
import imgList from '../../constants/img'
import SectionHeading from '../common/SectionHeading'

// Resolve a thumbnail entry ("project:key", http url, or array of those) to a usable src.
const resolveThumbnail = (thumbnailUrl) => {
  const first = Array.isArray(thumbnailUrl) ? thumbnailUrl[0] : thumbnailUrl
  if (!first) return imgList.abstract[0]
  if (typeof first === 'string' && first.startsWith('project:')) {
    return imgList.projects[first.split(':')[1]] || imgList.abstract[0]
  }
  return first
}

const featured = projectList.filter((p) => p.featured)

function FeaturedProjects() {
  if (!featured.length) return null

  return (
    <div className="my-16">
      {/* <SectionHeading title="Featured Projects" /> */}

      <div className="mx-auto flex w-[90%] max-w-6xl snap-x snap-mandatory flex-row flex-nowrap gap-5 overflow-x-auto px-2 py-6 scroll-smooth">
        {featured.map((project, ind) => {
          // Only projects with a live URL get a clickable card + link button.
          const hasLink = Boolean(project.projUrl)
          const Wrapper = hasLink ? 'a' : 'div'
          const wrapperProps = hasLink
            ? { href: project.projUrl, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Wrapper
              key={ind}
              {...wrapperProps}
              className={`group relative flex w-[280px] sm:w-[320px] flex-shrink-0 snap-center flex-col overflow-hidden rounded-2xl bg-bg2 shadow-md shadow-shadow/40 transition-all duration-300 hover:shadow-lg focus:outline-none ${hasLink ? 'hover:-translate-y-1' : ''}`}
            >
              {/* Thumbnail */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={resolveThumbnail(project.thumbnailUrl)}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-content leading-snug">
                  {truncateText(project.title, 55)}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-content/70">
                  {truncateText(project.description, 110)}
                </p>

                {/* Tags + link cue pinned to the bottom of the card */}
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {(project.tags || []).slice(0, 4).map((tag, tInd) => (
                      <span
                        key={tInd}
                        className="rounded-full bg-bg1 px-2.5 py-0.5 text-[10px] font-medium text-content/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {hasLink && (
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-content/60 transition-colors group-hover:text-primary">
                      View live project
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedProjects
