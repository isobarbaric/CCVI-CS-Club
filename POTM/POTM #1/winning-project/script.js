//Men
//Oct.
//slot machine
function preload() {
    tick = loadSound('tick.mp3')
    jazz = loadSound("jazz.mp3")
    img_slots = [
      loadImage('cat.png'),
      loadImage('hat.png'),
      loadImage('pumpkin.png')
    ]
    slot = loadImage("slot.png");
  }
  let w = 1600, h = 800, cnv, ww = 950, wh = 800;
  let cols = ['orange', 'gray', "purple"]
  let roll = [0, 0, 0], rollFrames = -1, rollSpeed = [1, 0, 0], rollState = [0, 0, 0], srs = 50, sloty = 0, srf = 100, win = -1, cx, cy, particles = [], pframes = 0, locked = false, pmy = 0;
  let wins = 0, rotframes = 0;
  function setup() {
  
    imageMode(CENTER);
    cnv = createCanvas(950, 800)
    windowResized()
    sloty = height / 4
    for (i = 0; i < img_slots.length; i++) {//resizing car images
      img_slots[i].resize(100, 100)
    }
  }
  function draw() {
  
    if (rotframes > 0) { rotframes-- }
  
    imageMode(CENTER)
    push()
  
    scale(ww / w, wh / h)
    //translate((ww - w) / 2, 0)
    drawBackground()
    push()
    translate(0, 0);
    angleMode(DEGREES)
    rotate(sin(rotframes * 60) / 2)
    drawSlotMachine()
    pop()
    drawParticles()
    textSize(30)
    text("Wins: " + wins, 20, 20)
    // text("Len: " + particles.length, 20, 50)
    pop()
    //resizeCanvas(ww,wh)
  
  }
  function drawBackground() {
    if (!jazz.isPlaying()) {
      jazz.play();
    }
    background("brown")
    fill(0, 75, 0)
    rect(0, 600, 1600, 800)
    fill(50, 50, 50)
    drawLight(200, 0);
    drawLight(1300, 0);
    // drawLight(750,0)
    //rect(550, 300, 500, 300)
  }
  function drawLight(x, y) {
    let squareColor;
    noStroke()
    for (let i = 0; i < 350; i += 5) {
      squareColor = color("yellow");
      squareColor.setAlpha(10);
      fill(squareColor)
      circle(x + 15, y + 200, i)
    }
  
    fill(0)
    rect(x, y, 30, 100);
    fill(255)
    circle(x + 15, y + 150, 35)
    fill(0)
    triangle(x + 15, y + 80, x + 65, y + 150, x - 50, y + 150)
    stroke(0)
    if (frameCount % round(random(100)) == 0) {
      createParticle(x + 15, y + 160, 0, false)
    }
  }
  function drawSlotMachine() {
    checkRoll()
    cx = 1600 / 2
    cy = 800 / 2
    push()
    translate(0, 100)
    rectMode(CENTER);
    for (let i = 0; i < roll.length; i++) {
      fill(cols[getIndex(roll[i] - 1)])
      var rs = rollState[i], w = (cx) + (i - 1) * 130;
      rect(w, (cy) - 75 + rs, 100, srs + rs)
      image(img_slots[getIndex(roll[i] - 1)], w, (cy) - 75 + rs, 100, srs + rs)
  
      var offset;
      if (rs > 50) { offset = -75 + rs } else {
        offset = 75 + (rs / 2)
        if (rs > 0) {
          fill(cols[getIndex(roll[i] + 1)])
          rect(w, (cy) - 100, 75 + (rs / 2), rs)
          image(img_slots[getIndex(roll[i] + 1)], w, (cy) - 100, 75 + (rs / 2), rs)
  
        }
  
      }
  
      fill(cols[getIndex(roll[i] + 1)])
      rect(w, (cy) + offset, 100, srs - rs + 100)
      image(img_slots[getIndex(roll[i] + 1)], w, (cy) + offset, 100 - (rs / 2), srs - rs)
      fill(cols[getIndex(roll[i])])
      rect(w, (cy) + rs, 100, 100 - rs)
      image(img_slots[roll[i]], w, (cy) + rs, 100, 100 - rs)
    }
    rectMode(CORNER)
    var str = "Any key to play"
    if (win != -1) {
      str = "You Win!!!!!!"
      fill(cols[win])
      rect(cx - 200, cy - 350, 400, 150)
      if (round(millis() / 1000) % 2 == 0) {
        image(img_slots[win], (cx) + 130, height / 4 - 80, 50, 50)
        image(img_slots[win], (cx) - 130, height / 4 - 80, 50, 50)
      }
    }
    if (round(millis() / 1000) % 2 == 0 && rollFrames <= 0) {
      textAlign(CENTER)
      fill('black')
      textSize(32)
      text(str, cx, cy - 260)
    }
    fill("purple")
    rect(w / 2 + 100, 500, 500, 50)
    image(slot, (cx) - 20, (cy) - 100, 600, 650)
    rectMode(CORNER)
    //drawing slot arm
    fill('black');
    rect((cx) + (260), cy, 80, 20)
    rect((cx) + (260 + 60), (cy), 20, sloty - (cy))
    fill('orange'); circle((cx) + (260 + 60) + 10, sloty, 50)
  
  
  
    pop()
  }
  function drawParticles() {
    if (pframes > 0) {
      pframes--;
      createParticle(w / 2, h / 2, img_slots[getIndex(win)], true)
    }
    for (var i = 0; i < particles.length; i++) {
      if (particles[i].active) { particles[i].update(); }
    }
  }
  function checkRoll() {
    //checking to begin roll state
    if (rollFrames > 0) {
      rollFrames--;
      if (rollFrames > srf - 25) {
        if (abs(rollFrames - (srf - 25)) > 12) {
          //sloty += 20
        } else {
          sloty -= 20
        }
      } else (sloty = 950 / 4)
      if (rollFrames % (rollFrames / 10) == 0) {
        for (let i = 0; i < roll.length; i++) {
          if (random(0, 1) > 0.5 && rollSpeed[i] == 0) {
            rollSpeed[i] = (rollFrames / 10)
          }
        }
      }
  
      //updating the roll animation based on the rollspeed
  
    } else {
      rollState = [0, 0, 0]; rollSpeed = [0, 0, 0]
      if (rollFrames == 0) {
        win = checkWin();
        if (win != -1) {
          pframes = 50;
          wins++;
        }
        //print(checkWin())
        rollFrames--;
      }
    }
    for (let i = 0; i < roll.length; i++) {
      if (rollSpeed[i] > 0) {
        rollState[i] += rollSpeed[i]
        if (rollState[i] >= srs) {
          if (i == 1) { tick.play() }
          rollState[i] = 0; rollSpeed[i] = (rollFrames / 10) * random(0.7, 1.3)
          roll[i] = getIndex(roll[i] - 1)
        }
      }
    }
  }
  function checkWin() {
    let x = roll[0];
  
    for (let i = 0; i < roll.length; i++) {
      if (roll[i] != x) {
        x = -1;
      }
    }
    return x;
  }
  function getIndex(i) {
    let index = i;
    if (index >= img_slots.length) { index = 0; }
    if (index < 0) { index = img_slots.length - 1 }
    return index;
  }
  function mousePressed() {
  
    //print(mouseX + "," + mouseY)
    if (rollFrames <= 0 && mouseY * (wh / h) < wh / 1.5) {
      locked = true
    }
  }
  function keyPressed() {
    if (rollFrames <= 0) {
      sloty = (wh / 1.5) / (wh / h)
      win = -1;
      rollFrames = 300
      rotframes = 30
    }
  }
  function mouseDragged() {
    if (locked) {
      let mult = wh / h;
      let spd = mouseY - pmy
      if (spd > 300) { spd = 300 }
  
      if (sloty / mult < 200) { sloty = 200 * mult }
      win = -1;
      if (sloty * mult > wh / 1.5) {
        rollFrames = abs(round((spd * 4 + 50) * random(0.8, 1.2)))
        srf = rollFrames;
        locked = false
        rotframes = 30
      }
      sloty = mouseY * mult
      pmy = mouseY
    }
  }
  function mouseReleased() { locked = false; }
  function windowResized() {
    ww = windowWidth
    wh = windowHeight
    //resizeCanvas(ww, wh)
  }
  function createParticle(x, y, img, useImg) {
    let made = false;
    for (let i = 0; i < particles.length; i++) {
      if (!particles[i].active && !made) {
        particles[i] = new Particle(x, y, img, useImg, i);
        made = true;
      }
    }
    if (!made) {
      var p = new Particle(x, y, img, useImg, 0)
      var index = particles.push(p);
      p.i = index;
    }
  }
  class Particle {
    constructor(x, y, img, useImage, i) {
      this.active = true
      this.useImage = useImage;
      this.img = img;
      this.x = x
      this.y = y
      this.i = i;
      if (this.useImage) {
        this.v = createVector(random(-10, 10), random(-3, -12))
        this.grv = 0.1
      } else {
        this.v = createVector(random(-2, 2), 0); this.grv = 0.05
      }
  
    }
    update() {
      if (this.active) {
        this.x += this.v.x
        this.y += this.v.y
        this.v.y += 0.1
        if (this.useImage) {
          image(this.img, this.x, this.y, 40, 40)
        } else {
          fill("yellow"); stroke("white")
          circle(this.x, this.y, 2)
        }
        if (this.y > 800) {
          this.active = false
        } else if (abs(w / 2 - this.x) > w / 2) {
          this.x -= this.v.x * 3
          this.v.x *= -1
        }
      }
    }
  }
