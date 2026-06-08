import React from 'react'
import PropTypes from 'prop-types'

// helpers
import { truncateText, capitalizeWords } from '../../helpers/common'
import { resolveProjectThumbnail, getProjectMeta } from '../../helpers/projects'

// Presentational project card for the grid. No modal/gallery inside — clicking it
// calls `onClick` so the parent page can open the shared ProjectModal.
function ProjectGridCard({ project, onClick }) {
  const thumbnail = resolveProjectThumbnail(project.thumbnailUrl)
  const meta = getProjectMeta(project)
  const statusDot = project.status === 'ongoing' ? 'bg-green-400' : 'bg-sky-400'

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-bg2 text-left shadow-md shadow-shadow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
    >
      {/* Thumbnail with status badge overlay */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {meta.status && (
          <span
            title={meta.status.description}
            className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${statusDot}`}></span>
            {meta.status.title}
          </span>
        )}
        {!project.projUrl && project.liveUrlNote && (
          <span
            title={project.liveUrlNote}
            className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Private
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-content leading-snug group-hover:text-primary">
          {truncateText(project.title, 60)}
        </h3>

        {/* Meta badges */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {meta.category && (
            <span title={meta.category.description} className="rounded-full border border-content/10 bg-bg1 px-2.5 py-0.5 text-[10px] font-medium text-content/70">
              {meta.category.title}
            </span>
          )}
          {project.openToContrib && (
            <span title={meta.contrib.description} className="rounded-full border border-green-500/20 bg-green-500/15 px-2.5 py-0.5 text-[10px] font-medium text-green-500">
              Open to contributions
            </span>
          )}
        </div>

        <p className="mt-2 text-xs leading-relaxed text-content/70">
          {truncateText(project.description, 120)}
        </p>

        {/* Tags pinned to bottom */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {(project.tags || []).slice(0, 4).map((tag, ind) => (
            <span key={ind} className="rounded-full bg-bg1 px-2.5 py-0.5 text-[10px] font-medium text-content/70">
              {capitalizeWords(tag)}
            </span>
          ))}
          {project.tags && project.tags.length > 4 && (
            <span className="rounded-full bg-bg1 px-2.5 py-0.5 text-[10px] font-medium text-content/50">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}

ProjectGridCard.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default ProjectGridCard
