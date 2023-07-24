import { fetchGallery } from '@/server/utils/galleryFolderFetcher'

export default defineCachedEventHandler(async () => {
  return await fetchGallery('static/drawings')
}, { maxAge: 2592000 })
