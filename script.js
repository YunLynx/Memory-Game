let scales = []
let chords = []

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
  Sol = new button(width/2 - 75, height/2 + 150, 40, 40, "G", 101, 168, 86, 0)
  La = new button(width/2, height/2 + 150, 40, 40, "A", 101, 168, 86, 0)
  Si = new button(width/2 + 75, height/2 + 150, 40, 40, "B", 101, 168, 86, 0)

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

  chords.push(loadSound('chord/High-C-Major.mp3'))
  chords.push(loadSound('chord/High-D-Major.mp3'))
  chords.push(loadSound('chord/High-E-Major.mp3'))
  chords.push(loadSound('chord/High-F-Major.mp3'))
  chords.push(loadSound('chord/High-G-Major.mp3'))
  chords.push(loadSound('chord/High-A-Major.mp3'))
}

function reset(){
  heart = 0
  leftHeart = 0
  rightHeart = 0

  o = 0
  t = 0

  clear = 3
  
  died = false
  tried = false

  played = false

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

  hDoPlay = false
   hRePlay = false
   hMiPlay = false
   hFaPlay = false
  hSolPlay = false
  hLaPlay = false
  hSiPlay = false

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
  
   hCmajor = false
   hDmajor = false
   hEmajor = false
   hFmajor = false
  hGmajor = false
  hAmajor = false
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
      text("Clear: "+clear, width/2, height/2 + 170)
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
         let index = Math.floor(random(0,21))
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
      leftLife()
      rightLife()
     
      break
      case 1:

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
      
      if(heart > 4){
        o = 2
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
      if(scales[14].isPlaying()){
          hDoPlay = true
        }
       if(scales[15].isPlaying()){
          hRePlay = true
        }
      if(scales[15].isPlaying()){
          hMiPlay = true
        }
       if(scales[17].isPlaying()){
          hFaPlay = true
        }
       if(scales[18].isPlaying()){
          hSolPlay = true
        }
       if(scales[19].isPlaying()){
          hLaPlay = true
        }
       if(scales[20].isPlaying()){
          hSiPlay = true
        }
        if((Do.pressed === true && (mDoPlay === true || lDoPlay === true || hDoPlay === true)) || (Re.pressed === true && (mRePlay === true || lRePlay === true || hRePlay === true)) || (Mi.pressed === true && (mMiPlay === true || lMiPlay === true || hMiPlay === true)) || (Fa.pressed === true && (mFaPlay === true || lFaPlay === true || hFaPlay === true)) || (Sol.pressed === true && (mSolPlay === true || lSolPlay === true || hSolPlay === true)) || (La.pressed === true && (mLaPlay === true || lLaPlay === true || hLaPlay === true)) || 
(Si.pressed === true && (mSiPlay === true || lSiPlay === true || hSiPlay === true))){
          o = 0
          heart = 4
          died = true
        }
      if((Do.pressed === true || Re.pressed === true || Mi.pressed === true || Fa.pressed === true || Sol.pressed === true || La.pressed === true || Si.pressed === true)){
        tried = true
      }
      if(heart > 4 && tried === true){
        menu = 4
      }
      if(heart > 4 && died === true){
        menu = 4
      }
      if(heart < 4 && clear < 1){
        menu = 4
      }
      if(back.pressed === true){
        menu = 0
      }
       if(keyIsPressed){
       heart = heart + 1
      }
      break
    case 3: //play screen (2 players)
    backDrop()

      two()
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