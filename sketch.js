var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 200, 50, 80);
  
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
 
  movingRect.debug = true;
  object1 = createSprite(300, 200, 50, 80);
  
  object1.debug = true;
  object2 = createSprite(500, 200, 50, 80);
  
  object2.debug = true;
  object3 = createSprite(800, 200, 50, 80);
  object3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  movingRect.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";
  object1.shapeColor = "green";
  fixedRect.shapeColor = "green";
  if(isTouching(movingRect,object2)){
    movingRect.shapeColor = "red";
    object2.shapeColor = "red";
  }
  
  
  if(isTouching(movingRect,object1)){
    movingRect.shapeColor = "red";
    object1.shapeColor = "red";
  }
  if(isTouching(movingRect,object3)){
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";
  }
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  drawSprites();
}
function isTouching(objectA,objectB){
  if (objectA.x - objectB.x < objectB.width/2 + objectA.width/2
    && objectB.x - objectA.x < objectB.width/2 + objectA.width/2
    && objectA.y - objectB.y < objectB.height/2 + objectA.height/2
    && objectB.y - objectA.y < objectB.height/2 + objectA.height/2) {
      return true;
  }
  else {
    return false;
  }
}