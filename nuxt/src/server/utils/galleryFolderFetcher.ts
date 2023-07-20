import { promisify } from 'util'
import { resolve } from 'path'
import { readdir as fsReaddir, stat as fsStat } from 'fs'
import { imageSize } from 'image-size'

const readdir = promisify(fsReaddir)
const sizeOf = promisify(imageSize)
const stat = promisify(fsStat)

type ImageType = { width: number, height: number, src: string, mtime: Date }
type DataItemType = { title: string, images: ImageType[] }

export async function fetchGallery (folderSrc: string) {
  const mainFolder = resolve(`./${process.env.NODE_ENV === 'production' ? '.output' : 'src'}/public/${folderSrc}`)

  const result: DataItemType[] = []

  const folders = await readdir(mainFolder)

  await Promise.all(folders.map(async (folder) => {
    const files = await readdir(`${mainFolder}/${folder}`)

    const images: ImageType[] = []

    await Promise.all(files.map(async (file) => {
      const filePath = `${mainFolder}/${folder}/${file}`

      const meta = await sizeOf(filePath)
      const _stat = await stat(filePath)

      const width = meta?.width || 0
      const height = meta?.height || 0

      images.push({ width, height, src: filePath.replace(/.*(\/static)/, '$1'), mtime: _stat.mtime })
    }))

    result.push({ title: folder, images })
  }))

  result.forEach((res) => {
    res.images.sort((a, b) => +b.mtime - +a.mtime)

    return res
  })

  result.sort((a, b) => +b.title - +a.title)

  return result
}
