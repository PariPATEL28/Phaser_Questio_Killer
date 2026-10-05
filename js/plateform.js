//second page reache to colider(pink girl)bricks blocks
function preload(params){

    this.load.spritesheet("activePnj","./assets/Sprites/sprite.png", 
        {frameWidth:100, frameHeight:100});
    // this.load.spritesheet("ground","./assets/Sprites/spritePhysics.png", 
    //     {frameWidth:160, frameHeight:160});
    this.load.image("sky", "./assets/Sprites/bg.png");
    
    this.load.image("plateform","./assets/Sprites/blocks1.png");
    this.load.image("plateform1","./assets/Sprites/blocks2.png");
    this.load.image("plateform2","./assets/Sprites/blocks3.png");
    this.load.image("plateform3","./assets/Sprites/blocks4.png");
    this.load.image("plateform4","./assets/Sprites/blocks5.png");
    this.load.image("plateform5","./assets/Sprites/blocks6.png");
    this.load.image("plateform6","./assets/Sprites/blocks7.png");
    this.load.image("plateform7","./assets/Sprites/blocks8.png");
    this.load.image("plateform8","./assets/Sprites/blocks9.png");
    this.load.image("plateform9","./assets/Sprites/blocks10.png");
    this.load.image("plateform10","./assets/Sprites/blocks11.png");
    this.load.image("plateform11","./assets/Sprites/blocks12.png");
    this.load.image("plateform12","./assets/Sprites/blocks13.png");
    this.load.image("plateform13","./assets/Sprites/blocks14.png")
    this.load.spritesheet("triggerimage","./assets/Sprites/girl.png", {frameWidth : 107, frameHeight : 100});//2ed plate
}

let cursors;
let player;

function create(params){
    let background = this.add.image(250,350,"sky");//for left-right,up-down
    background.setScale(0.65);// for the set size

    player = this.physics.add.sprite(100,100, 'activePnj');//player position
    player.setVelocityX(150);
    player.setCollideWorldBounds(true);
    player.setBounce(0.2);
    player.setScale(0.6);
    //colider
    player.body.setSize(50, 80);
    player.body.setOffset(25,10);

    //Player animation
    this.anims.create({
        key:"idle",
        frameRate: 0.6,//change impage per second
        frames:this.anims.generateFrameNumbers("activePnj",{start:0, end:0}),
        repeat:-1,
    });
//player move animation
    this.anims.create({
        key:"move",
        frameRate: 5,//change impage per second
        frames:this.anims.generateFrameNumbers("activePnj",{start:1, end:3}),
        repeat:-1,
    });

    //pink girl animation
    this.anims.create({
        key:"smile",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("triggerimage",{start:0, end:3}),        
        repeat:-1,
    });

    // ------------------------------------------------
    // BRICK PLATFORMS
    // ------------------------------------------------
    let bricks =  this.physics.add.staticGroup();
    bricks.create(350, 80,"plateform1");//2ed roundy top
    
    bricks.create(280, 760,"plateform");//1st blocks down 9step
    bricks.create(32, 360,"plateform13");//big pillor left
    bricks.create(112, 695,"plateform12");//blocks bricks left piller bottom
    bricks.create(159, 300,"plateform9");//bricks tringle block left piller 
    bricks.create(140, 180,"plateform7");//2single bricks top
    
    
    bricks.create(575, 420,"plateform2");//3ed right pillor
    bricks.create(500, 335,"plateform11");//right piller top step
    bricks.create(449, 580,"plateform10");//right piller bottom blocks
    bricks.create(380, 430,"plateform5");// 1step bricks


    bricks.create(290, 490,"plateform3");// 5 bricks bottom triangle 5steps
   
    bricks.create(350, 200,"plateform4");// 4 bricks triangle top
    
    
    bricks.create(200, 590,"plateform6");//7ed small blocks 2bricks
// ------------------------------------------------
    // TRIGGER GIRL
    let trigger =  this.physics.add.staticGroup();
    trigger.create(580, 700,"triggerimage");// for teigger enter

    
 // COLLIDER CALLBACK

    function callbackCollider(){
        console.log("ouch");
    }
    let currentScene = this // Save current scene
    function callbackCollider2(){ // Player touches pink girl
        currentScene.scene.start("dialogue");// triger enter and open next page dialoge
    }
    // COLLIDERS
    // let maincollider = this.physics.add.collider(player, ground, callbackCollider);
    this.physics.add.collider(player, bricks, callbackCollider);
    this.physics.add.overlap(player, trigger, callbackCollider2);
  // KEYBOARD
    cursors = this.input.keyboard.createCursorKeys();
}
 
function update(params){ // PLAYER TOUCHING PLATFORM
    if(player.body.touching.down){
        console.log('contact');
    }
    //Move Right
    if(cursors.right.isDown){//cursors.right.isDown && player.body.touching.down -player down then canot move right
        player.setVelocityX(200);
        player.setFlipX(true);  //for player front back position
        console.log("right");
        player.play("move", true);
    } 
    //Move Left
    else if(cursors.left.isDown){//&& player.body.touching.down -when you add player can not move left touching down plate form
        player.setVelocityX(-200);
        player.play("move", true);
        player.setFlipX(false);
        console.log("left");
    }
    //Jump
    else if(cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-200);
        console.log("Up");
        
    }    
    //Idle
    else{
        player.setVelocityX(0);
        player.play("idle", true);
    }
}

export let plateformScene = {
    key: "plateform",
    preload: preload,
    create: create,
    update: update,
};
