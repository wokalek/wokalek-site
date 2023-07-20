import { fetchGallery } from '@/server/utils/galleryFolderFetcher'

export default defineCachedEventHandler(async () => {
  return await fetchGallery('static/photos')
}, { maxAge: 60 * 60 })
