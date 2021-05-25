class Hexagon{
    constructor(x,y,width,height,angle){
        var options={
            'friction' : 0.7,
            'density' :1.2,
            'restitution': 0.9
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        
        this.x-=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.image=loadImage("sprites/hexagon.png");
        World.add(world,this.body);
    }
    display() {
      var angle=this.body.angle;
      push();
      fill("yellow");
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
}