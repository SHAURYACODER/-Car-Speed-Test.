var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed1,spee2,speed2,speed4;
var weight1,weight2,weight3,weight4;

function setup() {
  createCanvas(1350,600);

  speed1=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);

  weight1=random(400,1500);
  weight2=random(800,3000);
  weight3=random(400,1500);
  weight4=random(400,1500);

  wall1=createSprite(1300,100,30,height/2);
  wall1.shapeColor="black";

  wall2=createSprite(1300,300,30,height/2);
  wall2.shapeColor="black";

  wall3=createSprite(1300,500,30,height/2);
  wall3.shapeColor="black";

  wall4=createSprite(1300,700,30,height/2);
  wall4.shapeColor="black";

  car1=createSprite(50, 100, 50, 35);
  car1.velocityX = speed1;

  car2=createSprite(50, 250, 50, 35);
  car2.velocityX = speed2;

  car3=createSprite(50, 400, 50, 35);
  car3.velocityX = speed3;

  car4=createSprite(50, 550, 50, 35);
  car4.velocityX = speed4;
}

function draw() {
  background(255,255,255);
  
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
    car1.velocityX=0;

    var deformation1=0.5 * weight1 * speed1* speed1/22509;

    if(deformation1>180){
      car1.shapeColor=color(255,0,0);
    }

    if(deformation1<180 && deformation1>100){
      car1.shapeColor=color(230,230,0);
    }

    if(deformation1<100){
      car1.shapeColor=color(0,255,0);
    }
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2){
    car2.velocityX=0;

    var deformation2=0.5 * weight2 * speed2* speed2/22509;

    if(deformation2>180){
      car2.shapeColor=color(255,0,0);
    }

    if(deformation2<180 && deformation2>100){
      car2.shapeColor=color(230,230,0);
    }

    if(deformation2<100){
      car2.shapeColor=color(0,255,0);
    }
  }

  if(wall3.x-car3.x < (car3.width+wall3.width)/2){
    car3.velocityX=0;

    var deformation3=0.5 * weight3 * speed3* speed3/22509;

    if(deformation3>180){
      car3.shapeColor=color(255,0,0);
    }

    if(deformation3<180 && deformation3>100){
      car3.shapeColor=color(230,230,0);
    }

    if(deformation3<100){
      car3.shapeColor=color(0,255,0);
    }
  }

  if(wall4.x-car4.x < (car4.width+wall4.width)/2){
    car4.velocityX=0;

    var deformation4=0.5 * weight4 * speed4* speed4/22509;

    if(deformation4>180){
      car4.shapeColor=color(255,0,0);
    }

    if(deformation4<180 && deformation4>100){
      car4.shapeColor=color(230,230,0);
    }

    if(deformation4<100){
      car4.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}