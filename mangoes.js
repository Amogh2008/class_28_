class Mango{
    
    constructor(x, y, radius) {
      var options = {
          isStatic:true,
          restitution:0.8,
          friction:0.3,
          
      }
      this.body = Bodies.circle(x, y,radius , options);
      
      this.radius = radius;
      this.image = loadImage("sprites/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      ellipseMode(CENTER);
      fill(225);
      image(this.image,0,0, this.radius,50);
      pop();
    }
  };
  