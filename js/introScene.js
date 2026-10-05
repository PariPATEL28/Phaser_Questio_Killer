
//for first page (home)
function preload(){
    this.load.image("questionspanelb", "assets/Sprites/Label.png");
    this.load.image("sky", "assets/Sprites/bg.png");
}

function create(){
    let background = this.add.image(250,350,"sky");
    background.setScale(0.65);// for the set size
   
//game titale

    let gameName = this.add.text(300, 435, "QuestionKiller", {
        fontFamily: "Arial",
        fontSize: "50px",
        color: "#efa316",
        fontStyle: "bold",
        stroke: "#064b09",
        strokeThickness: 10
    }).setOrigin(0.5);
// Move title up and down forever
// this.tweens.add({
//     targets:  gameName,
//     y: "-=25",
//     duration: 900,
//     yoyo: true,
    
//     repeat: -1,
// });
    
    let button = this.add.image(300,550,'questionspanelb')
    let playText = this.add.text(160,500, "PLAY", {
    fontFamily: "Aria",
    fontSize: "110px",
    color: "#064b09",//"#064b09","#623903"
    fontStyle: "bold"
});

    
    button.setInteractive();
    console.log(this);
    let currentScene =this;

    let callback = function(){
        console.log(this);
        currentScene.scene.start("plateform");
    }
    button.on("pointerdown", callback)
    // Move title up and down forever
    this.tweens.add({
        targets:  playText,
        y: "-=25",
        duration: 900,
        yoyo: true,
        
        repeat: -1,
    });
    
}

function update(){

    
}

export let introScene = {
    Key: "intro",
    preload: preload,
    create: create,
    update: update,
}