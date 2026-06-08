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

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-bg2 text-left shadow-md shadow-shadow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
    >
      {/* Thumbnail */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-content leading-snug group-hover:text-primary">
            {truncateText(project.title, 60)}
          </h3>
          {/* Meta icons */}
          <div className="flex shrink-0 gap-1.5 pt-0.5">
            {meta.category && <img src={meta.category.icon} title={meta.category.description} alt={meta.category.title} className="h-4 w-4" />}
            {meta.status && <img src={meta.status.icon} title={meta.status.description} alt={meta.status.title} className="h-4 w-4" />}
            {meta.contrib && <img src={meta.contrib.icon} title={meta.contrib.description} alt={meta.contrib.title} className="h-4 w-4" />}
          </div>
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
