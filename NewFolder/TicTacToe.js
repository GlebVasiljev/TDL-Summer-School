const prompt = require("prompt-sync")({sigint: true});

let Gamefield = Array(9).fill('_');
let firstTurn = true;
let UserTurn = false;
let BotTrune = false;
let GameStatus = true;
let XfullField = 'X';
let OfullField = 'O';
let TurnCounter = 0;
//WinChecker
const Win = function(){
    if(Gamefield[0,1,2] == XfullField || Gamefield[0,1,2] == OfullField){
        GameStatus = false;
        console.log('Win');
    }
    if(Gamefield[3,4,5] == XfullField || Gamefield[0,1,2] == OfullField){
        GameStatus = false;
        console.log('Win');
    }
    if(Gamefield[6,7,8] == XfullField || Gamefield[0,1,2] == OfullField){
        GameStatus = false;
        console.log('Win');
    }
    if(Gamefield[0,4,8] == XfullField || Gamefield[0,1,2] == OfullField){
        GameStatus = false;
        console.log('Win');
    }
    if(Gamefield[0,3,6] == XfullField || Gamefield[0,1,2] == OfullField){
        GameStatus = false;
        console.log('Win');
    }
    if(Gamefield[2,4,6] == XfullField || Gamefield[0,1,2] == OfullField){
        GameStatus = false;
        console.log('Win');
    }
    if(Gamefield[2,4,6] == XfullField || Gamefield[0,1,2] == OfullField){
        GameStatus = false;
        console.log('Win');
    }
}

//turn controll
const Turn = function(){
    console.log(Gamefield);
    TurnCounter++;
    if(GameStatus == false && TurnCounter == 9){
        return 'Game ends';
    }else{
        
        if(UserTurn){
            const userStep = prompt('Choose sell: ');
            FieldChecker(userStep);

        }
        if(BotTrun){
            let BotStep = Math.floor(Math.random() * 9);
            console.log(BotStep);
            FieldChecker(BotStep);
        }
    }
}
//FieldControll
const FieldChecker = function(cellNumber){
    if(Gamefield[cellNumber] == 'X' || Gamefield[cellNumber] == 'O'){
        console.log('This field is occupaed');
        userStep = null;
        BotStep = null;
        TurnCounter--;
        Turn();
    }else{
        if(UserTurn){
            Gamefield[cellNumber] = XfullField;
            UserTurn = false;
            BotTrun = true;
            Turn();
            Win();
            userStep = null;
        }
        if(BotTrun){
            
            Gamefield[cellNumber] = OfullField;
            //Turn change
            BotTrun = false;
            UserTurn = true;

            console.log('Bot turn');
            Turn();
            Win();
            BotStep = null;
        }
    }
}

//Game controll
while(GameStatus == true){
    //First turn
    let fT = Math.round(Math.random(2));
    console.log(fT);
    if(firstTurn){
        if(fT = 0){
            UserTurn = true;
            Turn();
            firstTurn = false;
        }else{
            BotTrun= true;
            Turn();
            firstTurn = false;
        } 
    }
    
    
    Turn();
}


