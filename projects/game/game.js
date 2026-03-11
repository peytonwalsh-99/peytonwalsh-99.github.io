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
    
    if(bowlFull==true){
	print("You place the bowl on the ground. They are happy.")
	}
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
	foundBowl1=true;
	console.log(foundBowl1);
	print("You spot a shiny silver bowl on the floor. Congrats, you found the first bowl.");
	print("\nYou pick it up.");
	
}

function kitchen() {
    clear();
    print("\nYou are in the kitchen!");
    print("\nYou see a large container full of dog food.")
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tDining Room");

   console.log(foundBowl1);
   console.log(foundBowl2); 
	if(foundBowl1==true && foundBowl2==true){
	print("Now that you have both bowls, you may fill them and take them to their respective rooms. Type Fill Bowls to do this.");
}
    function processInput(input){
        if (input.toLowerCase() === "dining room") {
            diningRoom();
        } else if(input.toLowerCase()==="fill bowls") {
	if(foundBowl1==true && foundBowl2==true){
	bowlFull=true;
	}
	}
         else{
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
        else if (input.toLowerCase() === "office") {
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
    if(bowlFull==true){
	print("You place the bowl on the ground. They are happy.")
	}
    
    function processInput(input){
        if (input.toLowerCase() === "entry way") {
            entryWay();
        } else {
            stayHere();
            waitThenCall(office);
        }
    }
    waitForInput(processInput);
	foundBowl2=true;
	print("You see a shiny silver bowl on the floor. It is flipped upside-down with the remaining food spilt everywhere.");
	print("\nYou pick it up.");
	
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

