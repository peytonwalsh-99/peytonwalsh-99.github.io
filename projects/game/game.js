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
        if (input.toLowerCase() === "dining room") {
            diningRoom();}
        else if (input.toLowerCase() === "entry way") {
            entryWay();
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
        if (input.toLowerCase() === "living room") {
            livingRoom();}
        else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else {
            stayHere();
            waitThenCall(diningRoom);
        }
    }
    waitForInput(processInput);
}

function kitchen() {
    clear();
    print("\nYou are in the kitchen!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tDining Room");
    
    function processInput(input){
        if (input.toLowerCase() === "dining room") {
            diningRoom();
        } else {
            stayHere();
            waitThenCall(kitchen);
        }
    }
    waitForInput(processInput);
}

function entryWay() {
    clear();
    print("\nYou are in the entryway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tLiving Room\n\tOffice");
    
    function processInput(input){
        if (input.toLowerCase() === "living room") {
            livingRoom();}
        if (input.toLowerCase() === "office") {
            office();
        } else {
            stayHere();
            waitThenCall(entryWay);
        }
    }
    waitForInput(processInput);
}
function office() {
    clear();
    print("\nYou are in the office!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tEntry Way");
    
    function processInput(input){
        if (input.toLowerCase() === "entry way") {
            entryWay();
        } else {
            stayHere();
            waitThenCall(office);
        }
    }
    waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");
}
    function processInput(input){
            livingRoom();
    }
    waitForInput(processInput);

