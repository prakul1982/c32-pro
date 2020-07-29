class Box1 {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.8,
        'density':1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed < 5 ){
      
        var angle = this.body.angle;
    
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0, this.width, this.height);
        pop();
    
      }
    
  else {
  World.remove(world,this.body);

  push()
  this.visiblity = this.visiblity-5;
  tint(225,this.visiblity);
  pop()
  }
}
score(){
  if (this.visiblity<0 && this.visiblity>-105){
    console.log(this.visiblity)
  score ++;
  }
  }
}