class Ground 
{
  constructor(x, y, w,h,c) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.c = c;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.c);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}