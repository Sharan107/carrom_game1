class Ball{
   
    constructor(x,y,r)
    {
        var options={restitution:0.8,
                        friction:1.0,
                        density: 1.0,
                        isStatic:true
                    };

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.radius=r;
    }

    display()
        {
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            fill(255);
            ellipse(0,0,this.radius,this.radius);
            pop();
        }
    
}