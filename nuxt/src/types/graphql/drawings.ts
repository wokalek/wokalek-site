import type { ImageField } from '@/types/imagefield'

export interface DrawingSection {
  id: number
  name: string
}

export interface Drawing {
  id: number
  updateDate: Date
  pubDate: Date
  section: DrawingSection
  image: ImageField
  imageWidth: number
  imageHeight: number
  alt: string
}
