# Feed the dogs

This takes place in my house.
My dogs are jerks. You need to feed them because they are barking your ear off.


##Story
You are in the living room watching TV when the dogs suddenly demand food. You must find their bowls (they throw them around everywhere) a feed them, preventing them from eating eachothers food as well.

##Global Variables 

The most important variables will be "foundBowl1", "foundBowl2", and "bowlFull", you must find both boths before feeding either of them, otherwise they will both start eating from the same bowl and chaos will ensue. I will use a bunch of boolean variables to keep track of where the player has gone and what they have done.

##Map

```mermaid
graph TD;
    Office-->Entryway;
    Office-->Living Room;
    Entryway-->Living Room;
    Living Room-->Dining Room;
    Dinning Room-->Kitchen;
```  
