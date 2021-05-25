class Block{
    constructor(x,y,width,height){
        var options= {
            'isStatic': false,
            'restitution': 0.8
        }
    
   
    this.body=Bodies.rectangle(x,y,width,height,options);
 
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    this.Visiblity=255;
    }

score(){
    if(this.Visiblity<0 && this.Visiblity<=105){
   score++;

}
   }



    display() {     
    
        var pos1=this.body.position;

      if (this.body.speed<3){
        push();
        translate(pos1.x, pos1.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
  
      }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity=this.Visiblity-5;
            tint(255,this.Visiblity);
            pop();
           }
      }


        

    }

