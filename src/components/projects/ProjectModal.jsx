import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { TECarousel, TECarouselItem } from 'tw-elements-react'

// helpers
import { capitalizeWords } from '../../helpers/common'
import { resolveProjectImages, getProjectMeta } from '../../helpers/projects'

// constants
import svgList from '../../constants/svg'

import ProjectGallery from './ProjectGallery'

const carouselArrow = (d, label) => (
  <div className="hidden md:inline">
    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors [&>svg]:h-6 [&>svg]:w-6">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">{label}</span>
  </div>
)

// Details modal for a single project. Controlled via `project` (object opens, null
// closes). Renders an image carousel, metadata, links and a fullscreen gallery.
function ProjectModal({ project, onClose }) {
  const ref = useRef(null)
  const [fullscreenIndex, setFullscreenIndex] = useState(null)

  useEffect(() => {
    if (project) {
      if (!ref.current?.open) ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [project])

  const images = project ? resolveProjectImages(project.thumbnailUrl) : []
  const meta = project ? getProjectMeta(project) : null

  return (
    <>
      <dialog ref={ref} className="modal" onClose={onClose}>
        <div className="modal-box bg-bg2 max-w-3xl w-[91.666667%] max-h-[90vh] overflow-y-auto">
          {project && (
            <>
              {/* Image / carousel */}
              <div className="mb-4 -mx-6 -mt-6">
                {images.length === 1 ? (
                  <img
                    src={images[0]}
                    className="w-full h-48 md:h-64 object-cover rounded-t-lg cursor-pointer"
                    alt={project.title}
                    onClick={() => setFullscreenIndex(0)}
                  />
                ) : (
                  <TECarousel
                    showControls
                    ride="carousel"
                    prevBtnIcon={carouselArrow('M15.75 19.5L8.25 12l7.5-7.5', 'Previous')}
                    nextBtnIcon={carouselArrow('M8.25 4.5l7.5 7.5-7.5 7.5', 'Next')}
                  >
                    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                      {images.map((image, index) => (
                        <TECarouselItem
                          key={index}
                          itemID={index + 1}
                          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        >
                          <div
                            className="relative cursor-pointer"
                            onClick={(e) => {
                              const isButton = e.target.closest('button') || e.target.closest('[role="button"]')
                              if (!isButton) setFullscreenIndex(index)
                            }}
                          >
                            <img
                              src={image}
                              className="w-full h-48 md:h-64 object-cover rounded-t-lg"
                              alt={`${project.title} - Image ${index + 1}`}
                            />
                          </div>
                        </TECarouselItem>
                      ))}
                    </div>
                  </TECarousel>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-content mb-3 pr-10">{project.title}</h3>

              {/* External links */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.projUrl && (
                  <a href={project.projUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-content transition-colors">
                    {svgList.projectList.projectUrl}
                    <span className="text-sm">Visit Project</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-content transition-colors">
                    {svgList.socialIcons.github}
                    <span className="text-sm">View on GitHub</span>
                  </a>
                )}
                {project.caseStudy && (
                  <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-content transition-colors">
                    {svgList.view}
                    <span className="text-sm">View Case Study</span>
                  </a>
                )}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-content/60 text-xs md:text-sm mb-4 pb-4 border-b border-content/20">
                <small>{project.publishDate ? <u>{project.publishDate}</u> : 'Unpublished'}</small>
                {meta.category && (
                  <>
                    <span className="text-content/40">|</span>
                    <span title={meta.category.description} className="flex flex-row gap-1 items-center hover:cursor-help">
                      <img src={meta.category.icon} className="!text-primary h-4 w-4" alt={meta.category.title} />
                      <span className="text-xs">{meta.category.title}</span>
                    </span>
                  </>
                )}
                {meta.status && (
                  <>
                    <span className="text-content/40">|</span>
                    <span title={meta.status.description} className="flex flex-row gap-1 items-center hover:cursor-help">
                      <img src={meta.status.icon} className="!text-primary h-4 w-4" alt={meta.status.title} />
                      <span className="text-xs">{meta.status.title}</span>
                    </span>
                  </>
                )}
                <span className="text-content/40">|</span>
                <span title={meta.contrib.description} className="flex flex-row gap-1 items-center hover:cursor-help">
                  <img src={meta.contrib.icon} className="!text-primary h-4 w-4" alt={meta.contrib.title} />
                  <span className="text-xs">{meta.contrib.title}</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-content text-sm md:text-base mb-4 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(project.tags || []).map((item, index) => (
                  <div key={index} className="badge flex flex-wrap text-content hover:bg-contrast/70 hover:text-white hover:cursor-default font-bold rounded-md border border-contrast/50 px-2 py-0.5 text-sm">
                    {capitalizeWords(item)}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="modal-action mt-6 pt-4 border-t border-content/20">
                <button onClick={onClose} className="btn bg-bg2 w-full min-h-[44px]">Close</button>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>

      <ProjectGallery
        images={images}
        openIndex={fullscreenIndex}
        onClose={() => setFullscreenIndex(null)}
        title={project?.title || ''}
      />
    </>
  )
}

ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
}

export default ProjectModal
