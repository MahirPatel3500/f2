var hockey,hockeyimg;
var line,line1,line2,line3,line2,line5,line6;
var stricker , strickerimg;
var paddle,paddle2,paddleimg,paddle2img;
var PLAY  = 1
var SERVE = 2
var END = 0
function preload(){
  hockeyimg = loadImage("images.jpg");
  strickerimg = loadImage("stricker.png");
  paddleimg = loadImage("st.png")
  paddle2img = loadImage("st.png")
  }

  if(stricker.isTouching(line1)){
    text("YOU LOSE",150,250);
}
  

  function setup(){ 
  createCanvas(400,600);
 
  hockey = createSprite(200,300);
  hockey.addImage(hockeyimg)
  hockey.scale = 2.2
  




  line = createSprite(205,300,400,10)
  line.visible = true;
  line.debug = true;

  line1 = createSprite(1,300,18,590)
  line1.visible =false;

  line3 = createSprite(400,300,18,590)
  line3.visible = false;

  line4 = createSprite(70,10,160,10) 
  line4.visible = false; 

  line2 = createSprite(335,10,160,10)
  line2.visible = false;

  line5 = createSprite(70,595,160,10)
  line5.visible = false;
  
  line6 = createSprite(335,595,160,10)
  line6.visible = false;
  stricker = createSprite(285,415,20,10)
  stricker.addImage(strickerimg)
  stricker.scale = 0.19
 
  stricker.velocityX = -8
  stricker.velocityY = 8
 
  paddle = createSprite(200,100,30,30)
  paddle.addImage(paddleimg)
  paddle.scale = 0.17
  //paddle.debug = true
  paddle.setCollider("circle",0,0,200);

  paddle2 = createSprite(200,500,30,30)
  paddle2.addImage(paddle2img)
  paddle2.scale = 0.17
  //paddle2.debug = true
  paddle2.setCollider("circle",0,0,200);

  
}



function draw() {
  background(0);
  drawSprites();
  
    stricker.bounceOff(line1)
    stricker.bounceOff(line2)
    stricker.bounceOff(line3)
    stricker.bounceOff(line4)
    stricker.bounceOff(line5)
    stricker.bounceOff(line6)
    stricker.bounceOff(paddle)
    stricker.bounceOff(paddle2)






    paddle2.y = World.mouseY
    paddle2.x = World.mouseX

    paddle.x = stricker.x;
      
    
   
      
    
   
      
    


}
