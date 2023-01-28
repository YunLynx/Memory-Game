let scales = []
let chords = []
let boxes = []

class box{
	constructor(x, y, isOn, state){
		this.isOn = isOn
		this.state = state
		this.x = x
		this.y = y
		this.clicked = false
		this.isClear = false
	}
	draw(x,y){
		switch(this.state){
			case hiddenState:
				fill(0)
				break
			case revealedState:
				if(this.isOn){
				fill(255)
				}else{
					fill(0)
				}
				break
			case wrongState:
				fill(200,0,0)
				break
			case correctState:
				fill(23,212,17)
				break
		}
		rect(this.x, this.y, 40, 40)
	}
	update(){
			if(show === true && mouseIsPressed && mouseX >= this.x && mouseX <= this.x + 40 && mouseY >= this.y && mouseY <= this.y + 40){
			this.clicked = true
		}else {
			this.clicked = false
		}
		}
		render(){
		if(this.clicked === true && this.isOn === true && this.isClear === false){
	  this.state = revealedState
			this.isClear = true
			right = right + 1
		}else if(this.clicked === true && this.isClear === false){
			this.state = 2
      this.isClear = true
      wspeed = 1
      heart = heart + 1
		}else if(w < 1 || p < 1){
			boxes.forEach(box => box.state = hiddenState)
	    this.isOn = false
			this.isClear = false
			
			s = 25
			speed = 1
			show = false
			tried = true
		}else if(right > 5){
			c.forEach(box => box.state = correctState)
			pspeed = 1
			right = 0
      success = success - 1
		}
}
}

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
    strokeWeight(1)
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

      class attack{
  constructor(x, y, radius, rx, rxSpeed, bx, by){
    this.x = x
    this.y = y
    this.xSpeed = 0
    this.ySpeed = 0
    this.radius = radius
    this.rx = rx
    this.rxSpeed = rxSpeed
		this.bx = bx
		this.by = by
  }
  update(){
    fill(179, 121, 41)
    noStroke()
    circle(this.x, this.y, this.radius)
		
   if(this.bx < width/2){
    this.x+=this.xSpeed
    this.y+=this.ySpeed
		}else if(this.bx > width/2){
			this.x-=this.xSpeed
    this.y+=this.ySpeed
		}

    rectMode(CENTER)
    noFill()
    stroke(0)
    strokeWeight(2)
    rect(this.bx, this.by, 150, 15)
		fill(25, 51, 168)
	noStroke()
	rect(this.bx + 40, this.by, 40, 13)
		fill('red')
	rect(this.bx + 40, this.by, 7, 13)
    rectMode(CORNER)
    fill(87, 5, 117)
    rect(this.rx, this.by - 7.5, 3, 25)
    this.rx+=this.rxSpeed
		
			if(this.rx > this.bx + 75){
		this.rxSpeed = -3
	}
	if(this.rx < this.bx - 75){
		this.rxSpeed = +3
	}
	if(keyIsPressed){
		this.rxSpeed = 0
	}
		if(keyIsPressed && ((this.rx > this.bx + 20 && this.rx < this.bx + 32.5) || (this.rx > this.bx + 47.5 && this.rx < this.bx + 60))){
		this.xSpeed = 4
	  this.ySpeed = 0.4
	}
	
	if(keyIsPressed && this.rx > this.bx + 32.5 && this.rx < this.bx + 47.5){
		this.xSpeed = 4
	}
  }
	hit(){
    if(this.bx > width/2){
		if(this.x < width/2 - 290 && this.y > height/2 + 180 && this.y < height/2 + 240){
      leftHeart = leftHeart + 1
      t = 0
      this.xSpeed = 0
      this.ySpeed = 0
		}else if(this.x < width/2 - 290 && this.y > height/2 + 130 && this.y < height/2 + 170){
      leftHeart = leftHeart + 2
      t = 0
      this.xSpeed = 0
    }
    }
     if(this.bx < width/2){
		if(this.x > width/2 + 290 && this.y > height/2 + 180 && this.y < height/2 + 240){
      rightHeart = rightHeart + 1
      t = 0
      this.xSpeed = 0
      this.ySpeed = 0
		}else if(this.x > width/2 + 290 && this.y > height/2 + 130 && this.y < height/2 + 170){
      rightHeart = rightHeart + 2
      t = 0
      this.xSpeed = 0
    }
    }
	}
}

const hiddenState = 0
const revealedState = 1
const wrongState = 2
const correctState = 3
const row = 4
const gap = 60
        
function setup() {
  const width = 900
  const height = 475
  createCanvas(width, height);
  background(255);
  
  menu = 0

  leftTurn = true
  rightTurn = false

  oneP = new button(width/2, height/2 + 50, 120, 30, "1 Player", 101, 168, 86, 0)
  twoP = new button(width/2, height/2 + 100, 120, 30, "2 Players", 101, 168, 86, 0)
  
  instruction = new button(width/2, height/2 + 150, 120, 30, "Instruction", 101, 168, 86, 0)
  back = new button(width/2 - 330, height/2 - 210, 120, 30, "Back", 101, 168, 86, 0)
  home = new button (width/2 - 100, height/2 + 150, 120, 30, "Home", 101, 168, 86, 0)

  restart = new button(width/2 + 100, height/2 + 150, 120, 30, "Restart", 101, 168, 86, 0)
  restartPs = new button(width/2 + 100, height/2 + 150, 120, 30, "Restart", 101, 168, 86, 0)

ready = new button(width/2, height/2 + 100, 120, 30, "Ready", 101, 168, 86, 0)
  
  Do = new button(width/2 - 110, height/2 + 60, 40, 40, "C", 101, 168, 86, 0)
  Re = new button(width/2 - 40, height/2 + 60, 40, 40, "D", 101, 168, 86, 0)
  Mi = new button(width/2 + 40, height/2 + 60, 40, 40, "E", 101, 168, 86, 0)
  Fa = new button(width/2 + 110, height/2 + 60, 40, 40, "F", 101, 168, 86, 0)
  Sol = new button(width/2 - 75, height/2 + 130, 40, 40, "G", 101, 168, 86, 0)
  La = new button(width/2, height/2 + 130, 40, 40, "A", 101, 168, 86, 0)
  Si = new button(width/2 + 75, height/2 + 130, 40, 40, "B", 101, 168, 86, 0)

  OneHeart = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 1, 50)
  TwoHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 2, 50)
  ThreeHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 3, 50)
  FourHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 4, 50)
  FiveHearts = new Hearts(width/2 - 103, height/2 - 180, 20, 217, 25, 11, 5, 50)

   leftOneHeart = new Hearts(width/2 - 300, height/2 - 160, 20, 217, 25, 11, 1, 50)
  leftTwoHearts = new Hearts(width/2 - 300, height/2 - 160, 20, 217, 25, 11, 2, 50)
  leftThreeHearts = new Hearts(width/2 - 300, height/2 - 160, 20, 217, 25, 11, 3, 50)
  leftFourHearts = new Hearts(width/2 - 300, height/2 - 160, 20, 217, 25, 11, 4, 50)
  leftFiveHearts = new Hearts(width/2 - 300, height/2 - 160, 20, 217, 25, 11, 5, 50)

   rightOneHeart = new Hearts(width/2 + 100, height/2 - 160, 20, 217, 25, 11, 1, 50)
  rightTwoHearts = new Hearts(width/2 + 100, height/2 - 160, 20, 217, 25, 11, 2, 50)
  rightThreeHearts = new Hearts(width/2 + 100, height/2 - 160, 20, 217, 25, 11, 3, 50)
  rightFourHearts = new Hearts(width/2 + 100, height/2 - 160, 20, 217, 25, 11, 4, 50)
  rightFiveHearts = new Hearts(width/2 + 100, height/2 - 160, 20, 217, 25, 11, 5, 50)

  left = new attack(width/2 - 250, height/2 + 150, 30, width/2 - 200, 3, width/2 - 200, height/2 + 200)
  right = new attack(width/2 + 250, height/2 + 150, 30, width/2 + 200, 3, width/2 + 200, height/2 + 200)

  for(let i = 0; i < 16; i++){
boxes.push(new box())
}
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

  chords.push(loadSound('chord/Low-C-Major.mp3'))
  chords.push(loadSound('chord/Low-D-Major.mp3'))
  chords.push(loadSound('chord/Low-E-Major.mp3'))
  chords.push(loadSound('chord/Low-F-Major.mp3'))
  chords.push(loadSound('chord/Low-G-Major.mp3'))
  chords.push(loadSound('chord/Low-A-Major.mp3'))

  chords.push(loadSound('chord/Middle-C-Major.mp3'))
  chords.push(loadSound('chord/Middle-D-Major.mp3'))
  chords.push(loadSound('chord/Middle-E-Major.mp3'))
  chords.push(loadSound('chord/Middle-F-Major.mp3'))
  chords.push(loadSound('chord/Middle-G-Major.mp3'))
  chords.push(loadSound('chord/Middle-A-Major.mp3'))
}

function reset(){
  heart = 0
  leftHeart = 0
  rightHeart = 0

  o = 0
  t = 0

  //time
  s = 25
	speed = 1

  w = 10
	wspeed = 0
	
	p = 10
	pspeed = 0

  success = 3
  right = 0
  
  died = false
  tried = false

  played = false

  show = false
	tried = false
  

lDoPlay = false
   lRePlay = false
   lMiPlay = false
   lFaPlay = false
  lSolPlay = false
  lLaPlay = false
  lSiPlay = false
  
  mDoPlay = false
   mRePlay = false
   mMiPlay = false
   mFaPlay = false
  mSolPlay = false
  mLaPlay = false
  mSiPlay = false

 lCmajor = false
   lDmajor = false
   lEmajor = false
   lFmajor = false
  lGmajor = false
  lAmajor = false
  
 mCmajor = false
   mDmajor = false
   mEmajor = false
   mFmajor = false
  mGmajor = false
  mAmajor = false

 boxes.forEach(box => box.state = hiddenState)
}

function backDrop(){
  rectMode(CENTER)
  fill(255, 245, 112)
  noStroke()
  rect(width/2, height/2, 800, 475)
}

function one(){
  switch(o){
    case 0:
 life()
     
      textSize(30)
      textAlign(CENTER)
      fill(0)
      stroke(0)
      text("Clear: "+ success, width/2, height/2 + 170)

    boxes.forEach((box,i)=>{
		box.x = width/2 - 90 + (i%row)*gap
		box.y = height/2 - 90 + Math.floor(i/row)*gap
		
		box.draw(box.x,box.y)
		box.update()
		box.render()
	})
      break
      case 1:
    
      break
      case 2:
      frameRate(8)
      fill(0)
      textAlign(CENTER)
      textSize(30)
       text("If you are ready to listen the sound,", width/2, height/2 - 90)
      text("please click the button,", width/2, height/2 - 40)
      ready.update()
      ready.render()
       if(played === false && ready.pressed === true){
         let index = Math.floor(random(0,14))
        let randomScale = scales[index]
    randomScale.play()
    played = true
      }
      break
      case 3:
      frameRate(20)
      fill(0)
      textAlign(CENTER)
      textSize(30)
       text("Which one is the correct answer for the sound?", width/2, height/2 - 80)
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
       Si.update()
      Si.render()
      break
  }
}

function two(){
  switch(t){
    case 0:
     
      break
      case 1:

      break
      case 2:
     left.update()
      left.hit()
      break
      case 3:
     right.update()
      right.hit()
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

function leftLife(){
  switch(leftHeart){
    case 0:
leftFiveHearts.update()
      break
    case 1:
leftFourHearts.update()
      break
    case 2:
leftThreeHearts.update()
      break
    case 3:
leftTwoHearts.update() 
      break
    case 4:
leftOneHeart.update()
      break
    case 5:

      break
  }
}

function rightLife(){
  switch(rightHeart){
    case 0:
rightFiveHearts.update()
      break
    case 1:
rightFourHearts.update()
      break
    case 2:
rightThreeHearts.update()
      break
    case 3:
rightTwoHearts.update() 
      break
    case 4:
rightOneHeart.update()
      break
    case 5:

      break
  }
}

function draw() {
  clear()
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
        reset()
        menu = 2
      }
      if(twoP.pressed === true){
        reset()
        menu = 3
      }
      if(instruction.pressed === true){
        menu = 1
      }
      break
    case 1: //instruction
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
    case 2: //play screen (1 player)
    backDrop()
     
      one()
      back.update()
      back.render()
      
  fill(0)
	text(s, 20, 130)
	text(w, 60, 130)
	text(p, 100, 130)

s-=speed
	w-=wspeed
	p-=pspeed
      
	if(w < 0){
		w = 10
		wspeed = 0
	}
	
	if(p < 0){
		p = 10
		pspeed = 0
	}
      
      if(s < 0 && show === false){
		b = shuffle(boxes)
c = subset(b, 0, 6)
c.forEach(box => box.isOn = true)
boxes.forEach(box => box.state = revealedState)
		s = 15
		show = true
	}
	if(s < 0 && show === true){
		c.forEach(box => box.state = hiddenState)
		speed = 0
		s = 0
	}
	if(tried === true){
		c.forEach(box => box.isOn = false)
		tried = false
	}
	
       if(heart > 4){
        o = 2
        for(let i = 0; i < 16; i++){
boxes.pop(new box())
}
      }
     
      if(played === true){
        o = 3
      }
       if(scales[0].isPlaying()){
          lDoPlay = true
        }
       if(scales[1].isPlaying()){
          lRePlay = true
        }
      if(scales[2].isPlaying()){
          lMiPlay = true
        }
       if(scales[3].isPlaying()){
          lFaPlay = true
        }
       if(scales[4].isPlaying()){
          lSolPlay = true
        }
       if(scales[5].isPlaying()){
          lLaPlay = true
        }
       if(scales[6].isPlaying()){
          lSiPlay = true
        }
     if(scales[7].isPlaying()){
          mDoPlay = true
        }
       if(scales[8].isPlaying()){
          mRePlay = true
        }
      if(scales[9].isPlaying()){
          mMiPlay = true
        }
       if(scales[10].isPlaying()){
          mFaPlay = true
        }
       if(scales[11].isPlaying()){
          mSolPlay = true
        }
       if(scales[12].isPlaying()){
          mLaPlay = true
        }
       if(scales[13].isPlaying()){
          mSiPlay = true
        }
      
        if((Do.pressed === true && (mDoPlay === true || lDoPlay === true)) || (Re.pressed === true && (mRePlay === true || lRePlay === true)) || (Mi.pressed === true && (mMiPlay === true || lMiPlay === true)) || (Fa.pressed === true && (mFaPlay === true || lFaPlay === true)) || (Sol.pressed === true && (mSolPlay === true || lSolPlay === true)) || (La.pressed === true && (mLaPlay === true || lLaPlay === true)) || (Si.pressed === true && (mSiPlay === true || lSiPlay === true))){
          o = 0
          heart = 4
          died = true
          for(let i = 0; i < 16; i++){
boxes.push(new box())
}
        }
      if((Do.pressed === true || Re.pressed === true || Mi.pressed === true || Fa.pressed === true || Sol.pressed === true || La.pressed === true || Si.pressed === true)){
        tried = true
      }
      
      if(heart > 4){
      if(tried === true || died === true ||  success < 1){
        menu = 4
      }
      }
    
      if(back.pressed === true){
        menu = 0
      }
      break
    case 3: //play screen (2 players)
    backDrop()

      two()
      leftLife()
      rightLife()
       //left avatar
      fill(0)
	circle(width/2 - 320, height/2 + 150, 40)
	arc(width/2 - 320, height/2 + 240, 60, 150, radians(180), radians(360))
      //right avatar
	circle(width/2 + 320, height/2 + 150, 40)
	arc(width/2 + 320, height/2 + 240, 60, 150, radians(180), radians(360))

      back.update()
      back.render()
      if(back.pressed === true){
        menu = 0
      }

      break
    case 4: //result screen(1 player)
     backDrop()
      frameRate(20)
      if(heart > 4){
        fill(0)
        stroke(0)
        textSize(60)
        textAlign(CENTER)
        text("GAME OVER", width/2, height/2 - 100)
        home.update()
        home.render()
        restart.update()
        restart.render()
      }
      if(heart < 4){
        fill(0)
        stroke(0)
        textSize(60)
        textAlign(CENTER)
        text("GAME CLEAR", width/2, height/2 - 100)
        home.update()
        home.render()
        restart.update()
        restart.render()
      }
      if(home.pressed === true){
        menu = 0
      }
      if(restart.pressed === true){
          reset()
          menu = 2
        }
      break
    case 5: //result screen (2 players)
     backDrop()
      if(leftHeart > 4){
				LeftResult="LOSE"
				RightResult="WIN"
			}else if(rightHeart > 4){
				LeftResult="WIN"
				RightResult="LOSE"
			}else{
				LeftResult="DRAW"
				RightResult="DRAW"
			}
      
      textSize(60)
      textAlign(CENTER)
      fill(0)
      stroke(0)
      text(LeftResult, width/2 - 170,height/2 - 50)
			text(RightResult, width/2 + 170,height/2 - 50)
     
      rect(width/2, height/2 - 50, 3, 250)
      home.update()
        home.render()
       restartPs.update()
        restartPs.render()

      if(home.pressed === true){
        menu = 0
      }
      if(restartPs.pressed === true){
          reset()
          menu = 3
        }
      break
  }
}