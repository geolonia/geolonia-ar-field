const { promisify } = require('util')
const fs = require('fs')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

readFile('./style.dev.json')
  .then(data => JSON.parse(data))
  .then(style =>
    JSON.stringify(
      {
        ...style,
        sprite: 'https://geolonia.github.io/slime/grass'
      },
      null,
      2
    )
  )
  .then(data => writeFile('./style.json', data))
