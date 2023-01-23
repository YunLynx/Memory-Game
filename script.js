let scales = []

class button {
	constructor(x,y,w,h,text,r,g,b,s) {
		this.posX = x
		this.posY = y
		this.w = w
		this.h = h
		this.text = text
		this.Color = color(r,g,b)
    this.Stroke = s
		
		this.pressed = false
		this.inside = false
}
	
	update() {  //if cursor is on the button, change colour
		if(mouseX >= this.posX - this.w/2 && mouseX <= this.posX + this.w/2 && mouseY >= this.posY - this.h/2 && mouseY <= this.posY + this.h/2){
			this.inside = true
		}else {
			this.inside = false
		}
		if(this.inside === true && mouseIsPressed === true) {
			this.pressed = true
		}else {
			this.pressed = false
		}
	}
	
	render() {
		if(this.inside === true) {
			fill(255)
      stroke(this.Stroke)
		}else {
		fill(this.Color)
      stroke(this.Stroke)
		}
    rectMode(CENTER)
		rect(this.posX, this.posY, this.w, this.h)
		textAlign(CENTER,CENTER)
		textSize(20)
		fill(0)
		text(this.text, this.posX, this.posY)
	}
}

class Hearts{
	constructor(x, y, radius, r, g, b, n, s){
		this.x = x
		this.y = y
		this.radius = radius
		this.Color = color(r,g,b)
		this.number = n
		this.space = s
	}
	update(){
		fill(this.Color)
		noStroke()
		for(let i = 0; i < this.number; i++){
		circle(this.x + (i % this.number) * this.space, this.y, this.radius)
			triangle(this.x - this.radius/2 + (i % this.number) * this.space, this.y + this.radius/5, this.x + this.radius/2 + (i % this.number) * this.space, this.y, this.x + this.radius/2 + (i % this.number) * this.space, this.y + this.radius)
		circle(this.x + this.radius + (i % this.number) * this.space, this.y, this.radius)
			triangle(this.x + this.radius/2 + (i % this.number) * this.space, this.y, this.x + this.radius + this.radius/2 + (i % this.number) * this.space, this.y + this.radius/5, this.x + this.radius/2 + (i % this.number) * this.space, this.y + this.radius)
		}
	}
}
        
function setup() {
  const width = 900
  const height = 475
  createCanvas(width, height);
  background(255);
  
  menu = 0

  oneP = new button(width/2, height/2 + 50, 120, 30, "1 Player", 101, 168, 86, 0)
  easyP = new button(width/2, height/2 + 20, 120, 30, "Easy", 101, 168, 86, 0)
  normalP = new button(width/2, height/2 + 80, 120, 30, "Normal", 101, 168, 86, 0)
  hardP = new button(width/2, height/2 + 140, 120, 30, "Hard", 101, 168, 86, 0)
  twoP = new button(width/2, height/2 + 100, 120, 30, "2 Players", 101, 168, 86, 0)
  
  easyPs = new button(width/2, height/2, 120, 30, "Easy", 101, 168, 86, 0)
  normalPs = new button(width/2, height/2 + 63, 120, 30, "Normal", 101, 168, 86, 0)
  hardPs = new button(width/2, height/2 + 127, 120, 30, "Hard", 101, 168, 86, 0)
  
  instruction = new button(width/2, height/2 + 150, 120, 30, "Instruction", 101, 168, 86, 0)
  back = new button(width/2 - 300, height/2 - 180, 120, 30, "Back", 101, 168, 86, 0)

ready = new button(width/2, height/2 + 100, 120, 30, "Ready", 101, 168, 86, 0)
  
  Do = new button(width/2 - 110, height/2 + 80, 40, 40, "C", 101, 168, 86, 0)
  Re = new button(width/2 - 40, height/2 + 80, 40, 40, "D", 101, 168, 86, 0)
  Mi = new button(width/2 + 40, height/2 + 80, 40, 40, "E", 101, 168, 86, 0)
  Fa = new button(width/2 + 110, height/2 + 80, 40, 40, "F", 101, 168, 86, 0)
  Sol = new button(width/2 - 75, height/2 + 150, 40, 40, "G", 101, 168, 86, 0)
  La = new button(width/2, height/2 + 150, 40, 40, "A", 101, 168, 86, 0)
  Ti = new button(width/2 + 75, height/2 + 150, 40, 40, "B", 101, 168, 86, 0)

  OneHeart = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 1, 50)
  TwoHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 2, 50)
  ThreeHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 3, 50)
  FourHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 4, 50)
  FiveHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 5, 50)
}

function preload(){
  scales.push(loadSound('scale/Low-Do.mp3'))
  scales.push(loadSound('scale/Low-Re.mp3'))
  scales.push(loadSound('scale/Low-Mi.mp3'))
  scales.push(loadSound('scale/Low-Fa.mp3'))
  scales.push(loadSound('scale/Low-Sol.mp3'))
  scales.push(loadSound('scale/Low-La.mp3'))
  scales.push(loadSound('scale/Low-Si.mp3'))
  
scales.push(loadSound('scale/Middle-Do.mp3'))
 scales.push(loadSound('scale/Middle-Re.mp3'))
  scales.push(loadSound('scale/Middle-Mi.mp3'))
scales.push(loadSound('scale/Middle-Fa.mp3'))
scales.push(loadSound('scale/Middle-Sol.mp3'))
scales.push(loadSound('scale/Middle-La.mp3'))
scales.push(loadSound('scale/Middle-Si.mp3'))
  
  scales.push(loadSound('scale/High-Do.mp3'))
  scales.push(loadSound('scale/High-Re.mp3'))
  scales.push(loadSound('scale/High-Mi.mp3'))
  scales.push(loadSound('scale/High-Fa.mp3'))
  scales.push(loadSound('scale/High-Sol.mp3'))
  scales.push(loadSound('scale/High-La.mp3'))
  scales.push(loadSound('scale/High-Si.mp3'))
}

function reset(){
  heart = 0

  e = 0
  
  died = false

  played = false

  easy = false
  normal = false
  hard = false
}

function backDrop(){
  rectMode(CENTER)
  fill(255, 245, 112)
  noStroke()
  rect(width/2, height/2, 800, 475)
}

function easyOne(){
  switch(e){
    case 0:

      break
      case 1:
    
      break
      case 2:
      frameRate(8)
      ready.update()
      ready.render()
       if(ready.pressed === true){
         if(easy === true){
         let index = Math.floor(random(8,15))
        let randomScale = scales[index]
    randomScale.play()
    played = true
      }
         if(normal === true){
         let index = Math.floor(random(0,15))
        let randomScale = scales[index]
    randomScale.play()
    played = true
      }
         if(hard === true){
         let index = Math.floor(random(0,22))
        let randomScale = scales[index]
    randomScale.play()
    played = true
      }
       } 
      
      break
      case 3:
      frameRate(20)
      Do.update()
      Do.render()
       Re.update()
      Re.render()
       Mi.update()
      Mi.render()
       Fa.update()
      Fa.render()
       Sol.update()
      Sol.render()
       La.update()
      La.render()
       Ti.update()
      Ti.render()
      break
  }
}

function life(){
  switch(heart){
    case 0:
FiveHearts.update()
      break
    case 1:
FourHearts.update()
      break
    case 2:
ThreeHearts.update()
      break
    case 3:
TwoHearts.update() 
      break
    case 4:
OneHeart.update()
      break
    case 5:

      break
  }
}

function draw() {
  switch(menu){
    case 0: //home
      backDrop()
      fill(0)
      noStroke()
      textSize(80)
      textAlign(CENTER)
      text("Memory Game", width/2, height/2 - 100)
      
      oneP.update()
      oneP.render()
      twoP.update()
      twoP.render()
      instruction.update()
      instruction.render()
      if(oneP.pressed === true){
        menu = 1
      }
      if(twoP.pressed === true){
        menu = 2
      }
      if(instruction.pressed === true){
        menu = 3
      }
      break
    case 1: //1 player
     backDrop()
      fill(0)
      noStroke()
      textSize(60)
      textAlign(CENTER)
      text("1 Player", width/2, height/2 - 130)

      back.update()
      back.render()
      easyP.update()
      easyP.render()
      normalP.update()
      normalP.render()
      hardP.update()
      hardP.render()
      if(back.pressed === true){
        menu = 0
      }
      if(easyP.pressed === true){
        reset()
        easy = true
        menu = 4
      }
      if(normalP.pressed === true){
        reset()
        normal = true
        menu = 5
      }
      if(hardP.pressed === true){
        reset()
        hard = true
        menu = 6
      }
      break
    case 2: //2 players
     backDrop()
      fill(0)
      noStroke()
      textSize(60)
      textAlign(CENTER)
      text("2 Players", width/2, height/2 - 130)

      back.update()
      back.render()
      easyPs.update()
      easyPs.render()
      normalPs.update()
      normalPs.render()
      hardPs.update()
      hardPs.render()
      if(back.pressed === true){
        menu = 0
      }
      if(easyPs.pressed === true){
        reset()
        menu = 7
      }
      if(normalPs.pressed === true){
        reset()
        menu = 8
      }
      if(hardPs.pressed === true){
        reset()
        menu = 9
      }
      break
    case 3: //instruction
      backDrop()
      fill(0)
      noStroke()
      textSize(60)
      textAlign(CENTER)
      text("Instruction", width/2, height/2 - 130)

      back.update()
      back.render()
      if(back.pressed === true){
        menu = 0
      }
      break
    case 4: //easy (1 player)
    backDrop()

      life()
      easyOne()
      back.update()
      back.render()
      
      if(heart > 4){
        e = 2
      }
      if(played === true){
        e = 3
      }
      if(heart > 4 && died === true){
        menu = 10
      }
      if(back.pressed === true){
        menu = 0
      }
       if(keyIsPressed){
        heart = heart + 1
      }
     
      break
    case 5: //normal (1 player)
    backDrop()

      life()
      easyOne()
      back.update()
      back.render()
       if(heart > 4){
        e = 2
      }
      if(played === true){
        e = 3
      }
      if(heart > 4 && died === true){
        menu = 10
      }
       if(keyIsPressed){
        heart = heart + 1
      }
      if(back.pressed === true){
        menu = 0
      }
      break
    case 6: //hard (1 player)
    backDrop()

      life()
      easyOne()
      back.update()
      back.render()

       if(heart > 4){
        e = 2
      }
      if(played === true){
        e = 3
      }
      if(heart > 4 && died === true){
        menu = 10
      }
       if(keyIsPressed){
        heart = heart + 1
      }
      if(back.pressed === true){
        menu = 0
      }
      break
    case 7: //easy (2 players)
    backDrop()

      back.update()
      back.render()
      if(back.pressed === true){
        menu = 0
      }
      break
    case 8: //normal (2 players)
    backDrop()

      back.update()
      back.render()
      if(back.pressed === true){
        menu = 0
      }
      break
    case 9: //hard (2 players)
    backDrop()

      back.update()
      back.render()
      if(back.pressed === true){
        menu = 0
      }
      break
    case 10: //easy result (1 player)
     backDrop()
      break
    case 11: //normal result (1 player)
     backDrop()
      break
    case 12: //hard result (1 player)
     backDrop()
      break
    case 13: //easy result (2 players)
     backDrop()
      break
    case 14: //normal result (2 players)
    backDrop()
      break
    case 15: //hard result (2 players)
    backDrop()
      break
  }
}