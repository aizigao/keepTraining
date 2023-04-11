const canvas = document.querySelector('#cvs');
const context = canvas.getContext('2d');

let circles = []


function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.isSelected = false;
}


const randomFromTo = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min
}



function drawCircles() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    context.globalAlpha = 0.85;
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    context.fillStyle = circle.color;
    context.strokeStyle = 'black';

    if (circle.isSelected) {
      context.lineWidth = 5;
    } else {
      context.lineWidth = 1;
    }

    context.fill();
    context.stroke();
  }
}


let previousSelectedCircle;
canvas.onclick = (e) => {
  let clickX = e.pageX - canvas.offsetLeft;
  let clickY = e.pageY - canvas.offsetTop;
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];

    let distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2));
    console.log({ distanceFromCenter, r: circle.radius })

    if (distanceFromCenter <= circle.radius) {
      if (previousSelectedCircle != null) {
        previousSelectedCircle.isSelected = false;
      }
      previousSelectedCircle = circle;
      console.log({ circle })

      circle.isSelected = true;
      drawCircles();

      return;
    }
  }

}


function addRandomCircle() {
  let radius = randomFromTo(10, 60);
  let x = randomFromTo(0, canvas.width);
  let y = randomFromTo(0, canvas.height);

  let colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
  let color = colors[randomFromTo(0, 8)];

  let circle = new Circle(x, y, radius, color);

  circles.push(circle);

  drawCircles();
}

window.addRandomCircle = addRandomCircle



function clearCanvas() {
  circles = [];

  drawCircles();
}

window.clearCanvas = clearCanvas


