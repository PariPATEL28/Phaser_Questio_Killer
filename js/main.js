import { createDialogueEngine } from "./dialogueEngine.js";
import { introScene } from "./introScene.js";
import { plateformScene } from "./plateform.js";

console.log(Phaser);

let config = {
    type : Phaser.AUTO,
    width: 600,
    height : 800,
    physics: {
        default: 'arcade',
        arcade: {
        gravity: { x: 0, y: 900 },
        debug: false //true if tru you will get pink-blue line // Set true to see body outlines
        },
    },
    scene : [
       introScene,
       plateformScene,
        
        {
        key:"dialogue",
        preload: preload,
        create: create,
        update: update,

        },
    ],
}

let game = new Phaser.Game(config);
console.log(this);

function preload(){
    this.load.image("sky","assets/Sprites/bg.png");
    this.load.spritesheet("npc","assets/Sprites/j4.png", {frameWidth : 200, frameHeight : 200});//yellow girl
    this.load.spritesheet("npc2","assets/Sprites/girlpink.png", {frameWidth : 107, frameHeight : 100});//pink girl
    this.load.spritesheet("npc3","assets/Sprites/msgbox big.png", {frameWidth : 400, frameHeight : 400});
    this.load.spritesheet("npc4","assets/Sprites/bird.png", {frameWidth : 95, frameHeight : 95});
    this.load.spritesheet("npc44","assets/Sprites/bird.png", {frameWidth : 95, frameHeight : 95});
    this.load.spritesheet("npc5","assets/Sprites/bird.png", {frameWidth : 95, frameHeight : 95});
    this.load.spritesheet("npc6","assets/Sprites/bird.png", {frameWidth : 95, frameHeight : 95});
    this.load.spritesheet("npc7","assets/Sprites/msgBox3.png", {frameWidth : 300, frameHeight : 300});
    this.load.spritesheet("npc8","assets/Sprites/msgBox3.png", {frameWidth : 300, frameHeight : 300});
 
    console.log(this);
}
function create (){
    console.log("starting create");

    let background = this.add.image(250,350,"sky");//for left-right,up-down
    background.setScale(0.65);// for the set size
   
//     background.setOrigin(0,0);
//     background.setPosition(50,50);
//     background.x = 5;//position
//    // background.setRotation(1,8);

    let npc = this.add.sprite(100, 700,"npc")
    let npc2 = this.add.sprite(500, 550,"npc2")//girl
    let npc3 = this.add.sprite(400, 380,"npc3")//msgBox
    let npc4 = this.add.sprite(200, 180,"npc4")//bird
    let npc44 = this.add.sprite(200,120,"npc44")//bird
    let npc5 = this.add.sprite(400, 200,"npc5")
    let npc6 = this.add.sprite(150, 100,"npc6")
    let npc7 = this.add.sprite(400, 550,"npc7")//msgBox
    let npc8 = this.add.sprite(300, 680,"npc8")//msgBox
   
    // let questionPanelImage = this.add.image(config.width/2, 100, 'questionpanel');
    // questionPanelImage.setScale(0.5);

    // const nineslice = this.add.nineslice(
    //                           config.width/2, config.height/2-70, // x, y
    //                           "questionpanel", undefined, // texture, frame
    //                           800, 800, // width, height
    //                           80, 80, // leftWidth, rightWith
    //                           80, 80).setScale(0.5); // topHeight, bottomHeight


    //creer l'écran d'accuile-----------------------------------------


    // let optionPanelImage = [];
    // for(let i=0; i<4; i++){
    //     // answerPanelImage[i] = this.add.image(config.width/2, 480+45*i, 'answerpanel');
    //     optionPanelImage[i] = this.add.nineslice(
    //                           config.width/2, 590+45*i, // x, y
    //                           "answerpanel", undefined, // texture, frame
    //                           690, 85, // width, height
    //                           90, 90,
    //                           20, 20).setScale(0.5);
    //     // answerPanelImage[i].setScale(1.2, 0.5);

    // }

    this.anims.create({
        key:"all",
        frameRate: 0.6,//change impage per second
        frames:this.anims.generateFrameNumbers("npc",{start:0, end:3}),
        repeat:-1,
    })
    this.anims.create({
        key:"all2",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc2",{start:0, end:3}),        
        repeat:-1,
    })//for face expretion naskina question.------------------
    this.anims.create({
        key:"angry",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc2",{start:3, end:3}),        
        repeat:-1,
    })
    this.anims.create({
        key:"smile",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc2",{start:2, end:2}),        
        repeat:-1,
    })
    this.anims.create({
        key:"idle",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc2",{start:0, end:3}),        
        repeat:-1,
    })
     this.anims.create({
        key:"all3",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc3",{start:0, end:3}),        
        repeat:-1,
    })
     this.anims.create({
        key:"all4",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc4",{start:0, end:3}),        
        repeat:-1,
    })
    this.anims.create({
        key:"all44",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc44",{start:0, end:3}),        
        repeat:-1,
    })
    this.anims.create({
        key:"all5",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc5",{start:1, end:0}),        
        repeat:-1,
    })
    this.anims.create({
        key:"all6",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc6",{start:3, end:2}),        
        repeat:-1,
    })
    this.anims.create({
        key:"all7",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc7",{start:3, end:2}),        
        repeat:-1,
    })
    
    this.anims.create({
        key:"all8",
        frameRate: 0.6,//change impage per second        
        frames:this.anims.generateFrameNumbers("npc8",{start:3, end:2}),        
        repeat:-1,
    })
   
    npc.play("all");//all sprite loas here like animation
    npc2.play("all2");//girl 270
    
    function changeEmotions(nextScene){
        //alert(nextScene)
        if(nextScene == "forWhat"){
            npc2.play("angry")
        }
        if(nextScene == "have"){
            npc2.play("smile")
        }
        else{
            npc2.play("idle")
        }
        
    }
      
    npc3.play("all3");//msgbox
    npc3.x =300;
    npc4.play("all4");//bird left
    npc4.x =80;
    npc44.play("all44");//bird right corner
    npc44.x =550;
    npc5.play("all5");//bird right corner top-bottom
    npc5.y =180;
    npc6.play("all6");//bird
    npc6.x =250;
    npc7.play("all7");//small msg box
    npc7.x =240;   
    npc8.play("all8");//small msg box
    npc8.x =440;
  

    //ajouter animation
    // let tween = this.tweens.add({
    //     targets:npc2, 
    //     y:600,
    //     ease: 'liner', //bounce
    //     duration: 5000,
    //     repeat:0,
    //     yoyo: true,
    //     onRepeat: function(){
    //         npc2.x = npc2.x -100;
    //     }
    // });

    // tween.pause();
    // tween.resume();
//for jump and move ................................
    // let tweenChained = this.tweens.chain({
    //     targets : [npc2, npc],
    //     tweens:[
    //     {
    //         y:"-=250",        

    //     },
    //     {
    //         y: "+=150",
            
    //     },
    //     {
    //          x: 0,
    //     },            

    //     ],
    //     ease:'liner',
    //     duration:1000,        
    // })

    //tweenChained.pause();

    //
    npc2.setInteractive();
    let callback = function(){
        tweenChained.resume();
    }
    
    npc2.on("pointerdown",callback)

/////////////////Interactive BUTTONS
    npc7.setInteractive(); //for click effect
    let callbackOnClick1 = function(event){
         //alert(currentSceneForChoice[0]);

         let nextScene = currentSceneForChoice[0];
         console.log(nextScene,currentSceneForChoice);
         cleanScene()
         dialogueEngine.play(nextScene)
         changeEmotions(nextScene);
    }    
    npc7.on("pointerup",callbackOnClick1)

    npc8.setInteractive();
    let callbackOnClick2 = function(event){
       //alert(currentSceneForChoice[1]);
       let nextScene = currentSceneForChoice[1];
       console.log(nextScene,currentSceneForChoice);
        cleanScene()
       dialogueEngine.play(nextScene)
       changeEmotions(nextScene)
    }    
    npc8.on("pointerup",callbackOnClick2)



    

/// ADD THE MAIN TEXT//// for display dialog box (big)
let mainText = this.add.text(130,310, "😍Helo world! have a good day😍",
    {   fontFamily: 'Arial', 
        fontSize : 20, 
        wordwrap: {width: 70},
        color: "#064b09"});
        mainText.setVisible(true);
       // maintext.push(textExample1);


//ADD THE OPTION TEXT /// for option(question) list box small 
    let optionList = [];
    for(let i = 0; i < 2; i++){
        let textOption1 = this.add.text(110 + 200 * i, 535 + 130 * i,"",  //540 for 1st box and 130 for second box
        {   fontFamily: 'Arial', 
            fontSize : 25, 
            wordwrap: {width: 70},
            color: "#064b09"});
        textOption1.setVisible(false);
        optionList.push(textOption1);
        //textExample.text += "autre chose"

    //    let textExample = this.add.text(130,400,"Are you >=18 years old?🤔",
    //     {fontFamily: 'Arial', fontSize : 22, color: "#064b09"});
    //     textExample.setVisible(true);

   }  

   
    //SET UP DIALOGUE ENGINE 

var script = `
"Hey!"
"It’s a watch."
"It has been with me for many years."

+ A watch? ->watch
+ What is it for? ->forWhat
+ It looks old. ->old

===watch===
"Yeah, it’s a watch."
"It tells the time."
"My father gave it to me."
"Went through hell and back with him."

+ Why is it important? ->important
+ Can I have it? ->have
+ What is it for? ->forWhat

===forWhat===
"It tells time."
"When to eat, sleep, wake up, 
work."

===have===
"Sure, take it."
"I cannot tell the time now."

+ How does it work? ->work
+ What is your favorite thing about it? ->favorite
+ Can I give it away? ->give

===old===
"It is over twenty years old."
"It has scratches because I carried it everywhere."

+ Does it still work? ->work
+ Why didn't you buy a new one? ->important

===important===
"It reminds me of my father."
"Every time I look at it, I remember him."
"Some things are worth more than money."

+ That is touching. ->respect
+ Can I have it? ->have

===work===
"It uses a small battery."
"The hands move every second."
"It is simple but reliable."

+ Can I repair it? ->repair
+ What if the battery dies? ->battery

===battery===
"I simply replace the battery."
"Then it keeps working."

+ Interesting. ->favorite
+ Thanks. ->end

===repair===
"Anyone with patience can repair it."
"But memories cannot be repaired."

+ I understand. ->respect
+ Thanks. ->end

===favorite===
"My favorite thing is not the watch."
"It is the memories attached to it."

+ What memories? ->memory
+ Can I give it away? ->give

===memory===
"My father wore it every day."
"He gave it to me before I left home."
"It reminds me to keep going."

+ Thank you for sharing. ->respect
+ Can I have it? ->have

===respect===
"Thank you."
"I'm glad you understand."

+ Goodbye. ->end
+ One last question. ->question

===question===
"What would you like to know?"

+ Are watches expensive? ->price
+ Do you wear it every day? ->daily

===price===
"This one is priceless to me."
"Money cannot replace memories."

+ Goodbye. ->end

===daily===
"Yes."
"I wear it almost every day."
"It keeps me connected to my family."

+ Goodbye. ->end


+ Really? ->really
+ Thank you! ->thanks

===really===
"Haha!"
"I was only joking."
"I could never give it away."

+ I knew it! ->respect
+ That's funny. ->end

===thanks===
"You're welcome."
"Take good care of it."

+ I will. ->end

===give===
"I wouldn't give it away."
"Some gifts should stay in the family."

+ I understand. ->respect
+ Goodbye. ->end

===end===
"See you again!"
END`

    function updateDisplayDialogueCallback(item){
        console.log(item);
        mainText.text += item.m + "\n";
    }

    let currentSceneForChoice = [];
    let currentOptionToDisplay = 0;
    
    function cleanScene(){
        //si il faut detruire un element: element.destroiy()
        //si il faut effacer temporairement un element: element.setVisible(false)
        //pour effacer un texte: textElement.text = "";
        //penser a vider les variables et les listes d'options
        currentOptionToDisplay = 0;
        mainText.text = "";
        //for(let i =0; )
        optionList[0].text = "";
        optionList[1].text = "";
    }

    function updateDisplayOptionCallback(item){
        console.log(currentOptionToDisplay)
        console.log(item);
        optionList[currentOptionToDisplay].text += item.q + "\n";
        currentSceneForChoice[currentOptionToDisplay] =item.go;
        optionList[currentOptionToDisplay].setVisible(true);
        //optionPaneImage[currentOptionToDisplay].setVisible(true);
        currentOptionToDisplay ++;
     
        //mainText.text += item.q + "\n";
        //mainText.text += item.q + "\n";// for two times ask same question

    }

    let dialogueEngine = createDialogueEngine(script, updateDisplayDialogueCallback,updateDisplayOptionCallback);
    console.log(dialogueEngine);
    dialogueEngine.play(0);

}
function update (){
    console.log("Updating");
}