//console.log("Hello World");

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

var mouseX = 0;
var mouseY = 0;

addEventListener("mousemove", function () {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

var grav = 0.99;
c.strokeWidth = 5;
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}

function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 14;
  this.startRadius = this.radius;
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius);
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  this.vel = Math.random() / 5;
  this.update = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    // c.stroke();
  };
}

var bal = [];
for (var i = 0; i < 50; i++) {
  bal.push(new Ball());
}

function animate() {
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }
  requestAnimationFrame(animate);
  c.clearRect(0, 0, tx, ty);
  for (var i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav;
    } else {
      bal[i].dy += bal[i].vel;
    }
    if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx;
    }
    if (
      mouseX > bal[i].x - 20 &&
      mouseX < bal[i].x + 20 &&
      mouseY > bal[i].y - 50 &&
      mouseY < bal[i].y + 50 &&
      bal[i].radius < 70
    ) {
      //bal[i].x += +1;
      bal[i].radius += 5;
    } else {
      if (bal[i].radius > bal[i].startRadius) {
        bal[i].radius += -5;
      }
    }

    //for loop end
  }
  //animation end
}

animate();

setInterval(function () {
  bal.push(new Ball());
  bal.splice(0, 1);
}, 400);

// Learnings from this project are listed below:
const myLearnings = [
  "new",
  "this",
  "arc()",
  "array",
  "push()",
  "fill()",
  "return",
  "length",
  "clientX",
  "clientY",
  "Math.PI",
  "for loop",
  "splice()",
  "if...else",
  "innerWidth",
  "innerHeight",
  "strokeWidth",
  "Math.ceil()",
  "clearRect()",
  "getContext()",
  "Math.round()",
  "Math.random()",
  "setInterval()",
  "Dynamic Styles",
  "getElementById()",
  "Logical Operators (||,&&)",
  "Assignment Operators (+=)",
  "addEventListener : mousemove",
  "Arithmetic Operators (+,-,*,/,++)",
  "Comparison Operators (==,!=,<,>,>=)",
];
