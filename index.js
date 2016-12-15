const path = require('path')
const fs = require('fs')

function recursive (dir, ext) {
  if (!fs.existsSync(dir)) {
    return
  }

  const files = fs.readdirSync(dir)

  return files.reduce((found, file) => {
    const fullpath = path.join(dir, file)
    const stat = fs.lstatSync(fullpath)

    if (stat.isDirectory())
      return found.concat(recursive(fullpath, ext))

    if (fullpath.indexOf(ext) > -1)
      return found.concat(fullpath)

    return found
  }, [])
}

module.exports = recursive