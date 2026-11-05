#!/usr/bin/env zx

import 'zx/globals'

const srcDir = '../nuxt/fonts'
const destDir = '../nuxt/public/fonts'

try {
  await $`which woff2_compress`
}
catch {
  console.error(chalk.red('Error: woff2_compress is not installed. Install it via apt or compile it from google/woff2'))
  process.exit(1)
}

function toMB(bytes: string) {
  return (parseInt(bytes) / (1024 * 1024)).toFixed(2)
}

const fonts = await glob(`${srcDir}/*.ttf`)

if (fonts.length === 0) {
  console.log(chalk.yellow('TTF files not found in ' + srcDir))
  process.exit(0)
}

console.log(chalk.blue(`${fonts.length} fonts found. Starting compression...\n`))

await Promise.all(fonts.map(async (fontPath) => {
  const fileName = path.basename(fontPath)
  const tempWoff2Path = fontPath.replace('.ttf', '.woff2')
  const finalPath = path.join(destDir, fileName.replace('.ttf', '.woff2'))

  try {
    const output = await $`woff2_compress ${fontPath}`.quiet().text()
    const match = output.match(/Compressed (\d+) to (\d+)/)

    await $`mv ${tempWoff2Path} ${finalPath}`

    if (match) {
      const [_, oldSize, newSize] = match
      const diff = (parseInt(oldSize) - parseInt(newSize))

      const info = chalk.grey(`[${toMB(oldSize)}MB -> ${toMB(newSize)}MB], diff ${toMB(diff.toString())}MB`)

      console.log(chalk.green(`✓ ${fileName} ${info}`))
    }
  }
  catch (err: unknown) {
    console.error(chalk.red(`× Error in ${fileName}:`), (err as ProcessOutput).stderr)
  }
}))

console.log(chalk.bold.magenta('\nAll fonts have been successfully transferred to ' + destDir))
