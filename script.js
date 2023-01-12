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

class boxes{
  constructor(x, y, w, h, r, g, b, s, n, c, sp){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.Color = color (r,g,b)
    this.Stroke = s
    this.Number = n
    this.Column = c
    this.Space = sp

    this.pressed = false
		this.inside = false
  }
  update(){
    fill(this.Color)
    stroke(this.Stroke)
    for(let i = 0; i < this.Number; i++){
      rect(this.x + (i % this.Column) * this.Space, this.y + Math.floor(i / this.Column) * this.Space, this.w, this.h) 
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

  easyBoxP = new boxes(width/2 - 100, height/2 - 100, 50, 50, 0, 0, 0, 0, 16, 4, 70)
  normalBoxP = new boxes(width/2 - 100, height/2 - 100, 50, 50, 0, 0, 0, 0, 16, 4, 70)
  hardBoxP = new boxes(width/2 - 100, height/2 - 100, 50, 50, 0, 0, 0, 0, 16, 4, 70)
}

function backDrop(){
  rectMode(CENTER)
  fill(255, 245, 112)
  noStroke()
  rect(width/2, height/2, 800, 475)
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
        menu = 4
      }
      if(normalP.pressed === true){
        menu = 5
      }
      if(hardP.pressed === true){
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
        menu = 7
      }
      if(normalPs.pressed === true){
        menu = 8
      }
      if(hardPs.pressed === true){
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

      easyBoxP.update()
      back.update()
      back.render()
      if(back.pressed === true){
        menu = 0
      }
      break
    case 5: //normal (1 player)
    backDrop()

      normalBoxP.update()
      back.update()
      back.render()
      if(back.pressed === true){
        menu = 0
      }
      break
    case 6: //hard (1 player)
    backDrop()

      hardBoxP.update()
      back.update()
      back.render()
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