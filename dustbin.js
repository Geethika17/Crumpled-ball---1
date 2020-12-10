class Dustbin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
  
        this.body = Bodies.rectangle(x,y, width, height,options );
      World.add(world, this.body);
      this.body= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
      World.add(world, this.body);
      this.body = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.body);
        this.body.width = width
        this.body.height = height 
        
   }
   display(){
       fill("white");
       rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
       rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
       rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
   }
  }
  