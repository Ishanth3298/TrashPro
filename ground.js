class Ground {
    constructor(x,y,width,height) {
        var create_options = {
            isStatic :true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,create_options)
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
    }
}