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
    print("\nYou are sitting on the couch when you hear two loud dogs bounding into the room. It is 6 o'clock in the evening, according to them, dinner time.");
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
	foundBowl1=true;
	console.log(foundBowl1);
	if(bowlFull==false){
	print("You spot a shiny silver bowl on the floor. Congrats, you found the first bowl.");
	print("\nYou pick it up.");
	}else{
	print("You place 1 bowl on the floor. They are happy.");
	}
	
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
    print("\nthere is nothing interesting in here except a pile of shoes sitting on the floor."); 
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
	if(bowlFull==false){
	print("You see a shiny silver bowl on the floor. It is flipped upside-down with the remaining food spilt everywhere.");
	print("\nYou pick it up.");
	}
	else{
	print("You place the bowl on the ground. They are happy.");
        print("\nYou did it. Yay. That is the end of my pathetic little game.")
	}
	
	
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

