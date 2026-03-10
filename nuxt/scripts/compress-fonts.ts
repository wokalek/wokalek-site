#!/usr/bin/env zx

import 'zx/globals'

const srcDir = '../nuxt/app/assets/fonts'
const destDir = '../nuxt/public/fonts'

try {
  await $`which woff2_compress`
}
catch {
  console.error(chalk.red('Ошибка: woff2_compress не установлен. Установите его через apt или скомпилируйте из google/woff2'))
  process.exit(1)
}

function toMB(bytes: string) {
  return (parseInt(bytes) / (1024 * 1024)).toFixed(2)
}

const fonts = await glob(`${srcDir}/*.ttf`)

if (fonts.length === 0) {
  console.log(chalk.yellow('TTF файлы не найдены в ' + srcDir))
  process.exit(0)
}

console.log(chalk.blue(`Найдено шрифтов: ${fonts.length}. Начинаю сжатие...\n`))

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

      const info = chalk.grey(`[${toMB(oldSize)}MB -> ${toMB(newSize)}MB], разница ${toMB(diff.toString())}MB`)

      console.log(chalk.green(`✓ ${fileName} ${info}`))
    }
  }
  catch (err: unknown) {
    console.error(chalk.red(`× Ошибка в ${fileName}:`), (err as ProcessOutput).stderr)
  }
}))

console.log(chalk.bold.magenta('\nВсе шрифты успешно перенесены в ' + destDir))
