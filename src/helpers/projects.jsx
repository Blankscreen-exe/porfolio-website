import imgList from '../constants/img'
import svgList from '../constants/svg'
import { capitalizeFirstLetter } from './common'

// Resolve a single thumbnail entry ("project:key", http url, or local path) to a src.
function resolveOne(url) {
  if (!url) return null
  if (typeof url === 'string' && url.startsWith('project:')) {
    return imgList.projects[url.split(':')[1]] || null
  }
  return url
}

// Resolve a thumbnailUrl (string | array of "project:key"/url) to an array of srcs.
// Falls back to an abstract placeholder when nothing resolves.
export function resolveProjectImages(thumbnailUrl) {
  if (!thumbnailUrl) return [imgList.abstract[0]]
  const arr = Array.isArray(thumbnailUrl) ? thumbnailUrl : [thumbnailUrl]
  const resolved = arr.map(resolveOne).filter(Boolean)
  return resolved.length ? resolved : [imgList.abstract[0]]
}

// First image only — for card thumbnails.
export function resolveProjectThumbnail(thumbnailUrl) {
  return resolveProjectImages(thumbnailUrl)[0]
}

// Build the category / status / contribution meta (icon + title + description) for a
// project. Centralizes the labelling logic that used to be duplicated in ProjectCard.
export function getProjectMeta({ category, status, openToContrib }) {
  const meta = { category: null, status: null, contrib: null }

  if (category === 'hobby') {
    meta.category = { icon: svgList.projectList[category], title: capitalizeFirstLetter(category), description: 'It is one my hobby projects' }
  } else if (category === 'collab') {
    meta.category = { icon: svgList.projectList[category], title: 'Collaboration', description: 'I am collaborating on this project with other developers' }
  } else if (category === 'corporate') {
    meta.category = { icon: svgList.projectList[category], title: 'Corporate', description: 'I have contributed/developed it at work' }
  }

  if (status === 'ongoing') {
    meta.status = { icon: svgList.projectList.status[status], title: capitalizeFirstLetter(status), description: 'It is currently in progress' }
  } else if (status === 'finished') {
    meta.status = { icon: svgList.projectList.status[status], title: capitalizeFirstLetter(status), description: 'It is finished and ready to roll' }
  }

  meta.contrib = openToContrib
    ? { icon: svgList.projectList.contrib.open, title: 'Contributions Open', description: 'I am welcoming any and all contributors' }
    : { icon: svgList.projectList.contrib.close, title: 'Contributions Closed', description: 'No more contribution is needed. But do checkout other projects, they might fancy your interest' }

  return meta
}
