let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let foundBowl1=false;
let foodBowl2=false;
let bowlFull=false;

//If you need, add any "helper" functions here


//Make one function for each location
function livingRoom() {
    clear();
    print("\nYou are in the living room!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tEntry Way\n\tDining Room");
    
    function processInput(input){
        if (input.toLowerCase() === "Dining Room") {
            diningRoom();
        } else {
            stayHere();
            waitThenCall(livingRoom);
        }
    }
    waitForInput(processInput);
}

function diningRoom() {
    clear();
    print("\nYou are in the dining room");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tLiving Room\n\tKitchen");
    
    function processInput(input){
        if (input.toLowerCase() === "Living Room") {
            livingRoom();
        } else {
            stayHere();
            waitThenCall(diningRoom);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            livingRoom();
    }
    waitForInput(processInput);
}
