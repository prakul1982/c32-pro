class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
   

    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body
    }
    display(){
      

        if(this.sling.bodyA){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            push()
            strokeWeight(10);
            stroke(48,22,8);
     pop()
        }
    }
}