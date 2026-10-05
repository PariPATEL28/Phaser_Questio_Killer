var createDialogueEngine = function(script, displayDialogueCallback, displayOptionCallback){
    var self = {};
///////////////////////////////////////////////////////
//EX. Ecrire une scénario de dialogue sous la forme suivante


var text1 = "hey";
//Exo1:creer une function qui renvoi{m:"***le texte en perameter ***"}
var text2 ="+ What is it for? ->forwhat";
var text3 = "===Watch===";
var text4 = `hello
a la ligne 
test` 



//-----------------------Function text to Message------------------------------------------------
function textToMessage(text){
    return{m:text}
}

// let textToMessage = function (text){//     return {m:text1}// } //it's same let result = textToMessage(text1) console.log(result);

//---------------------------Text To Option-----------------------------------------------

//for the question
function textToOption(optionText){
    let splitedText = optionText.split("->");
    let cleanedOption = splitedText[0].substring(2);
    console.log(cleanedOption);
    return{q:cleanedOption, go:splitedText[1]}
}


//------------------------------------------------------------------------------
function textToScene(sceneText){
    let cleanedText = sceneText.replace("===","").replace("===","");
    //let cleanedText = sceneText.substring(3).replace("===","");
    //let cleanedText = sceneText.slice(3,-3);
    //let cleanedText = sceneText.split("=")[3];
    console.log(cleanedText)
    return{s:cleanedText}
}

let result = textToMessage(text1)
let result2 = textToOption(text2)
let result3 = textToScene(text3)
console.log(result);
console.log(result2);
console.log(result3);

//--------------Text to List----------------------------------------------

function textToList(originalText){
    return originalText.split("\n")
    
}
console.log(textToList(text4))

//-Transforme le texte en array --forwhat ?---
    function parseText(script){
        console.log(script)
        let scriptAsList = textToList(script);
        console.log(scriptAsList);
        let scriptAsObjects = [];
        for (let i = 0; i < scriptAsList.length; i++){
        const element = scriptAsList[i];
        if(element[0] == "+"){
            // c'est une question,actions pour une question
            let addedQuestion = textToOption(element);
            //scriptAsObjects[i] = addedQuestion;
            scriptAsObjects.push(addedQuestion);
        }
        else if(element[0] == "=")//(une nouvelle scene)let got scene
        {
            let addedScene = textToScene(element);
            scriptAsObjects.push(addedScene);
            //scriptAsObjects[i]= GoToScene;
        }
        else
        {
            let addedMessage = textToMessage(element);
            scriptAsObjects.push(addedMessage);
        }
    }
    
    return scriptAsObjects

}
parseText(script);
let formatedScript = parseText(script);
console.log(formatedScript);

function sceneToIndex(formatedScript, sceneName)
{
    for (let i = 0; i < formatedScript.length; i++){
        const element = formatedScript[i];

        if(sceneName == element.s){
            return i;
        }
        
    }
}


// /////
function readScript(script, line){
    let currentLine = script[line];
    
    if(currentLine.m || currentLine.m ==""){
    //is a  message
        console.log(currentLine.m);
        displayMessage(currentLine)
       // displayOption(currentLine)
    }
    else if(currentLine.s){
        //for question
        console.log(currentLine.s);
    }
    else{
        console.log(currentLine.q)
        displayOption(currentLine)
    }
        
    //if(script[line+1] && !script[line+1].s){//or
    if(script[line+1] ){
        if(script[line+1].s){
            //stop the flow
            console.log("---end of chapter ---")
            return
        }
        else
        {
             
        let callback = function (){
            readScript(script, line+1);
        }
        setTimeout (callback,100); //for the text timeout
        }
       
    }       
    
}
//readScript(formatedScript, 0);//script means each letter in each line 


function displayMessage(item)
{
    // var domElement = document.createElement("div");
    // //domElement.style.position = "relative";
    // domElement.style.color = "#187002";
    // domElement.style.fontSize = "25px";
    // domElement.innerHTML = "<p>" + item.m + "</p>"; //aquivalent a "<p>texte a afficher</p>"
    // //domElement.innerHTML =  item.m +  //try = "Mon texte" or item.m ,m for message
    // document.body.appendChild(domElement);

    displayDialogueCallback(item);
}
function displayOption(item)
{
    
    var domElement = document.createElement("div");
    //domElement.style.position = "relative";
    domElement.style.color = "#920707";
    domElement.style.fontSize = "20px";
    domElement.innerHTML = item.q; //or try = "Mon texte" or item.q for question
   
   
    let callback = function(event){
    //Les action
        //alert (item.go);// you have to click on question ,you will get alert
        //transformer item.go("what") en l' index ou la lecture doit commercer
        let nextIndex = sceneToIndex(formatedScript, item.go);
        console.log(nextIndex);

        readScript(formatedScript,nextIndex);
    }
    domElement.addEventListener("click", callback);
    // domElement.addEventListener("click", function(event){
    //     alert(item.go);
    // });

    document.body.appendChild(domElement);
    displayOptionCallback(item);
}

//------------------------------------------------------------------------------------
// function recursiveFuncExemple(){
//     //surtout ne pas invoquer, boucle infinie!
//     console.log("une recursion");
//     recursiveFuncExemple();

// }

//------------------------------------------------------------------------------------


/////////////////////////////////////////


    function play(index){//index parfois chaine de caracteres
        //transformer l'index en un nombre dans la cas ou il est  passé sous forme de chaine de 
        //charecter  INDIC:function sceneToIndex(formatedScript, sceneName),avec une condition
       // Indice : console.log( typeof(index) );
       
        //for active: when click questio,give ans
        let nextIndexToRead = 0;
        if (typeof(index) == "string"){
            nextIndexToRead = sceneToIndex(formatedScript, index);
        }
        else{
            nextIndexToRead = index;
        }
        readScript(formatedScript, nextIndexToRead)
    }
    
    self.play = play;
    return self;

}

export{createDialogueEngine}

/////////////////////////////////use libarary (main.js)///////////////////////
//import....

// var callvackFunction1 = function(item){
//     //Do code PHASER
// }
// var callvackFunction2 = function(item){
//     //Do code PHASER
// }
// let dialougeEngine = createDialogueEngine(script, callvackFunction1, callvackFunction2);