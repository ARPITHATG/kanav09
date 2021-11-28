class Ground{

constructor(x, y, w, h){

    this.body = Bodies.rectangle(this.x, this.y, this.w, this,h)
   this.w = w
   this.h = h
   World.add(world, this.body)

}

display(){
    var pos = this.body.position
     
    rectMode(CENTER)
    fill("red")
    rect(pos.x, pos.y, this.w, this.h)
  
}












}