class Rubber {
    constructor(x, y,r) {
      var options = {
        'restitution':0.3,
        'friction': 5,
        'density':1
      };
      this.body = Bodies.rectangle(x,y,r,options);
this.x=x
this.y=y
this.r=r


      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate (angle)
      strokeWeight(3);
      stroke('black')
      fill('blue')
	  ellipseMode(RADIUS);
    ellipse(800,300, 50, 50);
      pop();
    };
  };