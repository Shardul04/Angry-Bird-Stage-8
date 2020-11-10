class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke_image = loadImage("sprites/smoke.png");
    this.trajectory = [];
    this.colour = 255;

  }

  display() {
   /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();
    if(this.body.position.x>200&&this.body.velocity.x>5){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }
    for (var i=0;i<this.trajectory.length;i++){
      push();
      this.colour = this.colour-0.5;
      tint(255,this.colour);
      image(this.smoke_image,this.trajectory[i][0],this.trajectory[i][1]);
     pop();
    }
  }
}
