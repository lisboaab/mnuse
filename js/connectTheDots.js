function game(){
const canvasDiv = document.getElementById("canvas")
const canvas = document.getElementById("game")
let context = canvas.getContext("2d")
let startX
let startY
let paint
let lines = []
let size = 'xl'

let points = {'xl': [[[242,323], [321,448], [314,313], [484,335], [355,252], [475,166], [333,186], [344,50], [260,169], [180,71], [183,204], [62,250], [204,296], [121,427]]]}
let stage = 0
let nbPoints = 14
let startingPoint = 0

function init() {
  drawPoints()

  canvas.onmousedown = function(e){
    let mouseX = e.pageX - this.offsetLeft
    let mouseY = e.pageY - this.offsetTop           
    paint      = true
    startX     = mouseX
    startY     = mouseY
  }

  canvas.onmousemove = function(e){
    if(paint){
      if (startingPoint === nbPoints - 1) {
        e.preventDefault()
        return false
      }

      let mouseX = e.pageX - this.offsetLeft
      let mouseY = e.pageY - this.offsetTop

      if (Math.abs(startX - points[size][stage][startingPoint][0]) > 10 || Math.abs(startY - points[size][stage][startingPoint][1]) > 10) {
        return false
      }

      if (Math.abs(startX - points[size][stage][startingPoint][0]) < 10 && Math.abs(startY - points[size][stage][startingPoint][1]) < 10 && Math.abs(mouseX - points[size][stage][startingPoint+1][0]) < 10 && Math.abs(mouseY - points[size][stage][startingPoint+1][1]) < 10) {
        startX = points[size][stage][startingPoint][0];
        startY = points[size][stage][startingPoint][1];
        mouseX = points[size][stage][startingPoint+1][0];
        mouseY = points[size][stage][startingPoint+1][1];
        lines.push({x1: startX,y1: startY, x2: mouseX, y2: mouseY})
        startingPoint++
        startX = points[size][stage][startingPoint][0]
        startY = points[size][stage][startingPoint][1]
      }

      drawLines(mouseX, mouseY);
      }
    };

    canvas.onmouseup = function(e){
      handleMouse(e)
    }
  
    canvas.onmouseleave = function(e){
      handleMouse(e)
    }
  }
  
  function handleMouse(event) {
    paint = false;
    if (startingPoint === nbPoints - 1) {
      event.preventDefault()
      endGame()
      return false
    }
  
    let mouseX = event.pageX - canvas.offsetLeft
    let mouseY = event.pageY - canvas.offsetTop
  
    if (Math.abs(startX - points[size][stage][startingPoint][0]) <= 10 && Math.abs(startY - points[size][stage][startingPoint][1]) <= 10 && Math.abs(mouseX - points[size][stage][startingPoint+1][0]) <= 10 && Math.abs(mouseY - points[size][stage][startingPoint+1][1]) <= 10) {
      startX = points[size][stage][startingPoint][0]
      startY = points[size][stage][startingPoint][1]
      mouseX = points[size][stage][startingPoint+1][0]
      mouseY = points[size][stage][startingPoint+1][1]
      lines.push({x1: startX, y1: startY, x2: mouseX, y2: mouseY})
      startingPoint++
      startX = points[size][stage][startingPoint][0]
      startY = points[size][stage][startingPoint][1]
    }
  
    drawLines()
  }
  
  function drawLines(toX, toY) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  
    for (let i = 0; i < lines.length; i++) {
      drawLine(lines[i])
    }
  
    drawLine({x1: startX, y1: startY, x2: toX, y2: toY})
  
    drawPoints()
  }
  
  function drawLine(line) {
    context.strokeStyle = "#18234d"
    context.lineJoin = "round"
    context.lineWidth = 8
  
    context.beginPath()
    context.moveTo(line.x1, line.y1)
    context.lineTo(line.x2, line.y2)
    context.stroke()
  }
  
  function drawPoints() {
    context.beginPath()
    context.moveTo(points[size][stage][3][0], points[size][stage][3][1])
    context.stroke()
  
    for (let i = 0; i < points[size][stage].length; i++) {
      let centerX = points[size][stage][i][0]
      let centerY = points[size][stage][i][1]
      let radius = 8

      if(i == 0){
        context.fillStyle = '#732AD9'
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        context.fill()
      }else{
        context.beginPath()
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        context.fillStyle = '#827397'
        context.fill()
      }
    }
  
    drawActivePoints()
  }
  
  function drawActivePoints() {
    for (let i = 0; i < points[size][stage].length; i++) {
      if (i <= startingPoint && startingPoint > 0) {
        let centerX = points[size][stage][i][0]
        let centerY = points[size][stage][i][1]
        context.beginPath()
        context.arc(centerX, centerY, 6, 0, 2 * Math.PI, false)
        context.fillStyle = '#18234d'
        context.strokeStyle = '#18234d'
        context.fill()
        context.stroke()
      }
    }
  }
  
  function endGame() {
    const finalImg = document.getElementById("finalImg")
    canvas.style.display = "none"
    finalImg.style.display = "inline"
  }
  
    init()
  }
  
game()