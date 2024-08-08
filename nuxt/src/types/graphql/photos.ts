import type { ImageField } from '@/types/imagefield'

export interface PhotoSection {
  id: number
  name: string
}

export interface Photo {
  id: number
  updateDate: Date
  pubDate: Date
  section: PhotoSection
  image: ImageField
  imageWidth: number
  imageHeight: number
  alt: string
}
