class ground  {
    constructor(x,y){
      var options = {
        
        'isStatic':true,
        restitution:0
    }
    this.body = Bodies.rectangle(x, y, 800,690, options);
    this.width = 1300;
    this.height = 20;
    World.add(world, this.body);

    }
  
    display() {
        
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect( 0,0, this.width, this.height);
        pop();
      
    }
  }
  
        
      