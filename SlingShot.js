class SlingShot{
    constructor(bodyA,PointB){
        var option = {
            bodyA:bodyA,
            pointB:PointB,
            stiffness:0.02,
            length:5
        }
    this.pointB = PointB;
        this.sling = Constraint.create(option);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");


        World.add(world,this.sling);
    }  
    fly(){
        this.sling.bodyA = null;
    }
     attach(body){
     this.sling.bodyA = body;
     }

    display(){
     image(this.sling1,200,20)
     image(this.sling2,170,20)
     
        if(this.sling.bodyA){
        push();

        if(this.sling.bodyA.position.x<220){
            strokeWeight(5);
            stroke(48,22,8);
        line(this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
        line(this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y);
        image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
        }
        else{  strokeWeight(3);
            stroke(48,22,8);
        line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
        line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y);
        image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)
        }
    pop();
        }
}
}