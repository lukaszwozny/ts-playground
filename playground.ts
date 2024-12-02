console.log('######## REFRESH ############')

// const GOIMG_URL = 'http://localhost:7000'
const GOIMG_URL = 'http://192.168.0.16:7000'

const apiUrl = `${GOIMG_URL}/api/svg/from-panel`
const mimetypeSvg = 'image/svg+xml'
const mimetypePng = 'image/png'

const itemData = {
  "panel": {
    "rows": 1,
    "columns": 2,
    "price": 5
  },
  "tiles": [
    {
      "custom": false,
      "icon": {
        "id": "6746830dc7a840c75e29df71",
        "alt": "Fan",
        "filename": "fan.svg",
        "mimeType": "image/svg+xml",
        "filesize": 883,
        "width": 16,
        "height": 16,
        "createdAt": "2024-11-27T02:25:17.516Z",
        "updatedAt": "2024-11-27T02:25:17.516Z",
        "url": "/api/tile-icons/file/fan.svg",
        "thumbnailURL": null
      },
      "label": {
        "firstLine": "BOTTOM",
        "secondLine": "LIGHTS",
        "fullLine": "BOTTOM LIGHTS"
      },

      "labelColor": {
        "name": "red",
        "hex": "#FF0000"
      },

      "iconColor": {
        "name": "blue",
        "hex": "#0000FF"
      },
      "price": 5,
      "id": "6747c9086a9040001e0470ee"
    },

    {
      "custom": false,

      "icon": {
        "id": "6746830dc7a840c75e29df71",
        "alt": "Fan",
        "filename": "fan.svg",
        "mimeType": "image/svg+xml",
        "filesize": 883,
        "width": 16,
        "height": 16,
        "createdAt": "2024-11-27T02:25:17.516Z",
        "updatedAt": "2024-11-27T02:25:17.516Z",
        "url": "/api/tile-icons/file/fan.svg",
        "thumbnailURL": null
      },

      "label": {
        "firstLine": "BOTTOM",
        "secondLine": "LIGHTS",
        "fullLine": "BOTTOM LIGHTS"
      },

      "labelColor": {
        "name": "yellow",
        "hex": "#FFFF00"
      },

      "iconColor": {
        "name": "blue",
        "hex": "#0000FF"
      },
      "price": 5,
      "id": "6747c9086a9040001e0470ef"
    }
  ],
  "id": "6747c9086a9040001e0470ed"
}


// const icon = { icon: iconObj, index: 1 }

const panel = JSON.parse(JSON.stringify({
  ...itemData['panel'],
  tiles: itemData['tiles']
}))
// const iconPromises = getIconPromises(panel.tiles, payload)

async function query() {
  console.log('query....')
  const r = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(panel),
  })
    .then((r) => r.json())

  // const bufferSvg = Buffer.from(svg, 'utf-8')
  // console.log(bufferSvg)
  console.log(Object.keys(r))
  const svg = r['svg']
  console.log(svg)

  const filenameSvg = `output/panel.svg`
  // save svg to file
  const fs = require('fs')
  fs.writeFileSync(filenameSvg, svg, 'utf-8')
}

query()


console.log(GOIMG_URL)
console.log(panel)
