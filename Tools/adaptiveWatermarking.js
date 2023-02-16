// Ver: 1.7
// Last Update: 2022/09/21
// 功能性修改请及时更新版本号并修改注释
// Wr = |W * cos(α)| + |H * sin(α)|
// Hr = |H * cos(α)| + |W * sin(α)|

const waterMarkId = 'page--watermark'
const fontSize = 18
const fontFamily = 'PingFangSC'
const lineOffset = 22
const waterMarkColOffset = 100
const waterMarkRowOffset = 100
let rotateAngle = 20

function generateWatermark(strArray) {
  if (!strArray || strArray.length === 0 || strArray.includes(undefined)) {
    return
  }
  let canvas = document.createElement('canvas')
  let rectWidth = getStrMaxWidth(strArray)
  let rectHeight = lineOffset * strArray.length
  let angleCos = Math.cos(rotateAngle * Math.PI / 180)
  let angleSin = Math.sin(rotateAngle * Math.PI / 180)

  canvas.width = Math.abs(rectWidth * angleCos) + Math.abs(rectHeight * angleSin) + waterMarkColOffset
  canvas.height = Math.abs(rectWidth * angleSin) + Math.abs(rectHeight * angleCos) + waterMarkRowOffset
  canvas.onselectstart = () => false

  let canvasCenterX = canvas.width / 2
  let convasCenterY = canvas.height / 2

  let canvasContext = canvas.getContext('2d')
  canvasContext.translate(canvasCenterX, convasCenterY)
  canvasContext.rotate(rotateAngle * Math.PI / 180)
  canvasContext.translate(-canvasCenterX, -convasCenterY)
  canvasContext.font = `${fontSize}px ${fontFamily}`
  // Debug start
  // canvasContext.fillStyle = 'red'
  // canvasContext.fillRect(0, 0, canvas.width, canvas.height)
  // Debug fishish
  canvasContext.fillStyle = '#666'
  canvasContext.textAlign = 'center'
  let offset = 0
  for (let str of strArray) {
    canvasContext.fillText(
      str,
      canvasCenterX,
      fontSize + offset + (canvas.height - rectHeight) / 2
    )
    offset += lineOffset
  }

  let div = document.createElement('div')
  div.id = waterMarkId
  div.style.pointerEvents = 'none'
  div.style.top = '40px'
  div.style.left = '0px'
  div.style.opacity = '0.15'
  div.style.position = 'fixed'
  div.style.zIndex = '999'
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
}

function getStrMaxWidth(strArray) {
  let canvas = document.createElement('canvas')
  let canvasContext = canvas.getContext('2d')
  let strMaxWidth = 0
  canvasContext.font = `${fontSize}px ${fontFamily}`
  // 非等宽字体不一定字符最多就最长
  strArray.forEach(str => {
    let strWidth = canvasContext.measureText(str).width
    strMaxWidth = strMaxWidth >= strWidth ? strMaxWidth : strWidth
  })
  canvas.remove()
  return strMaxWidth
}

export function setWaterMark(strArray) {
  if (document.getElementById(waterMarkId) === null) {
    generateWatermark(strArray)
  } else {
    removeWaterMark()
    generateWatermark(strArray)
  }
}

export function removeWaterMark() {
  if (document.getElementById(waterMarkId) !== null) {
    document.body.removeChild(document.getElementById(waterMarkId))
  }
}

export function isWaterMarkExist() {
  return document.getElementById(waterMarkId) !== null
}