import { promisify } from 'util'
import { resolve } from 'path'
import { readdir as fsReaddir, stat as fsStat } from 'fs'
import { imageSize } from 'image-size'

const readdir = promisify(fsReaddir)
const sizeOf = promisify(imageSize)
const stat = promisify(fsStat)

type ImageType = { width: number, height: number, src: string, mtime: Date }
type DataItemType = { title: string, images: ImageType[] }

async function prepareImage (filePath: string) {
  const src = filePath.replace(/.*(\/static)/, '$1')
  const size = await sizeOf(filePath)
  const meta = await stat(filePath)

  const width = size?.width || 0
  const height = size?.height || 0

  const imgBlob = await $fetch<Blob>(`http://nuxt:3000/_ipx/f_jpeg&fit_outside&blur_1.5&s_30x30${src}`)
  const buffer = Buffer.from(await imgBlob.arrayBuffer()).toString('base64')
  const posterSrc = `data:${imgBlob.type};base64,${buffer}`

  return { src, posterSrc, width, height, mtime: meta.mtime }
}

export async function fetchGallery (folderSrc: string) {
  const mainFolder = resolve(`./${process.env.NODE_ENV === 'production' ? '.output' : 'src'}/public/${folderSrc}`)

  const result: DataItemType[] = []

  const folders = await readdir(mainFolder)

  await Promise.all(folders.map(async (folder) => {
    const files = await readdir(`${mainFolder}/${folder}`)

    const images: ImageType[] = []

    await Promise.all(files.map(async (file) => {
      const filePath = `${mainFolder}/${folder}/${file}`

      images.push(await prepareImage(filePath))
    }))

    images.sort((a, b) => +b.mtime - +a.mtime)

    result.push({ title: folder, images })
  }))

  result.sort((a, b) => +b.title - +a.title)

  return result
}
