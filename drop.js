class drop {
    constructor(x, y,radius) {
        var options = {
            'restitution':0.4
           // 'friction':1.0,
           // 'density':1.0
        }
       // this.x = x;
        //this.y = y;
        this.radius=radius;
        this.body =Bodies.circle(x,y,this.radius,options); 
        this.color= color("#1A93E6");
       
        
       // this.image = loadImage("paper.png");
       // this.body = height;
        World.add(world,this.body);
      } 

      updateY (){
       if(this.body.position.y>height){
         Matter.Body.setPosition (this.body,{
           x:random(0,400),
           y:random(0,400)
         })
           } 
           
      }
      display(){ 

        var pos = this.body.position; 
        var angle=this.body.angle; 

        push();

        translate(pos.x,pos.y); 
        rotate (angle);  

        noStroke();  

        fill (this.color); 

       ellipseMode(RADIUS)  ;
    
        ellipse(0,0,this.radius,this.radius) 

        pop();
      }
} 
