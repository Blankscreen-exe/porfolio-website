import React, { useState, useMemo, useEffect } from 'react'

// Data
import ProjData from '../../data/projectList.json'

// Components
import PageTitle from '../common/PageTitle'
import Paragraph from '../common/Paragraph'
import ProjectGridCard from './ProjectGridCard'
import ProjectModal from './ProjectModal'

const PAGE_SIZE = 9

function Projects() {
  // Scroll to top only on mount, not on every re-render (e.g. opening the modal).
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(null)

  // Filter by title, description and tags.
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return ProjData
    return ProjData.filter((p) =>
      (p.title || '').toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q) ||
      (p.tags || []).some((t) => t.toLowerCase().includes(q))
    )
  }, [search])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const goTo = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <PageTitle title={'Projects'} />
      <Paragraph text={'This portfolio represents a selection of my endeavors, encompassing both professional undertakings within the confines of my employment and those born from personal pursuits.'} />

      {/* Search */}
      <div className="mx-auto my-8 max-w-xl">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search projects, tech, keywords..."
          className="w-full rounded-lg border border-content/20 bg-bg1 px-4 py-3 text-content placeholder:text-content/40 focus:border-primary focus:outline-none focus:shadow-none focus:ring-0 transition-colors"
        />
        <p className="mt-2 text-center text-xs text-content/50">
          {filtered.length} project{filtered.length === 1 ? '' : 's'}
          {search.trim() ? ' found' : ''}
        </p>
      </div>

      {/* Grid */}
      {pageItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((project, ind) => (
            <ProjectGridCard
              key={`${currentPage}-${ind}`}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      ) : (
        <p className="my-16 text-center text-content/60">No projects match your search.</p>
      )}

      {/* Numbered pagination */}
      {pageCount > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg bg-bg2 px-4 py-2 text-sm font-medium text-content transition-colors hover:text-primary disabled:opacity-40 focus:outline-none"
          >
            Prev
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              className={`h-10 w-10 rounded-lg border-2 text-sm font-bold transition-colors focus:outline-none ${
                p === currentPage
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-transparent bg-bg2 text-content hover:text-primary'
              }`}
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="rounded-lg bg-bg2 px-4 py-2 text-sm font-medium text-content transition-colors hover:text-primary disabled:opacity-40 focus:outline-none"
          >
            Next
          </button>
        </div>
      )}

      {/* Shared details modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Projects
