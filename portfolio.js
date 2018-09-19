const c = document.getElementById('canvas');
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = [
  '#f4a142',  /*orange*/
  '#f44242',  /*red*/
  '#fff7f7',  /*white*/
  '#191919',  /*black*/
];

const colors2 = [
  '#2ad62f',  /*green*/
  '#7d2ad6',  /*purple*/
  '#464449',  /*dark gray*/
];

addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', event => {
  c.width = innerWidth;
  c.height = innerHeight;

  init();
});

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(color) {
  return color[(Math.floor(Math.random() * colors.length))];
}

/**** Animation ****/
function particle(x, y, radius, color, glow) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.glow = glow;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.01;
  this.distanceFromCenter = {x:randomIntFromRange(0, 1000),
    y:randomIntFromRange(0, 600)};

  this. update = () => {
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * this.distanceFromCenter.x;
    this.y = y + Math.sin(this.radians) * this.distanceFromCenter.y;
    this.draw();
  }

  this.draw = () => {
    ctx.beginPath();
    ctx.shadowBlur=20;
    ctx.shadowColor=this.glow;
    ctx.arc(this.x, this.y, 20, this.radius, -1,
      Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

let particles;
function init() {
  particles = [];
  for(let i = 0; i < 50; i++) {
    particles.push(new particle(canvas.width / 2,
      canvas.height / 2, 5, randomColor(colors)));
  }
}



function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
  })
}

init();
animate();
