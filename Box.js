class Box {
    constructor (x,y,width,height){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
  display(){
  var pos =this.body.postion;
  rectMode(CENTER) ;
  fill(255)
  rect(pos.x,pos,y,this.width,this.height)

  }  
}














