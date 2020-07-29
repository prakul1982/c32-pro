class Polygon {
    constructor(x, y, side,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1
      }
      this.body = Bodies.polygon(x, y, side,radius, options);
      this.side  = side;
      this.radius = radius;
      this.image = loadImage("polygon.jpg");
      this.visiblity= 225;

      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
  
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate (angle);
      ellipseMode(RADIUS);

      fill(255);
    //  circle(0,0,this.radius);
      imageMode(CENTER);
      image(this.image, 0,0, this.radius,this.radius);
      pop();
  
    }
  };