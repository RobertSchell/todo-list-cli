const prompt = require('prompt-sync')({sigint: true});//prompt sync

console.log("Welcome to the To-Do List Manager Application!\n");//logs Welcome... \n creates break between this line and next one

console.log("=============================================\n");//logs break bar visually with added line break
/*
console.log("~ Select an action ~");
console.log("[1] Create a to-do item");
console.log("[2] Complete a to-do item");
console.log("[3] Exit To-do List Application")
*/
selectOption()
//let option = Number(prompt('> '));//number casts user entry to 1,2,3 in case they enter "1", "2", "3"
let toDoList = [];//assigns empty array to toDoList variable, this will contain toDoList items entered by user
let statusArray = [];//assigns empty array to statusArray variable, this will contain complete/incomplete

while(option !== 3){//while loop for actions if user enters 1, 2, or and invalid operation
    if(option === 1){//if user enters 1, proceed to next step in loop
        console.log("\n~ Creating a new to-do item ~");//print statement
        console.log("What is this to-do item called?");//print statement
        
        //add to do item
        let addItem = prompt("> ");//assigns user prompt with >(enter your entry here), stores user entry in addItem variable
        while(addItem.length === 0){ //or "" (empty string)//if user enters invalid input (not 1,2, or 3)
            console.log("Invalid: Input cannot be empty. Try again.")//print this statement...
            addItem = prompt("> ")//...and re-prompt for valid entry
        }
        
        toDoList.push(addItem);//pushes user entry into [] toDoList variable created on line 13
        statusArray.push(false);
        
        displayList()//see displayList function at/near line 85-105
        
        //reprompt the user
      selectOption()//see selectOption function at/near line 73-79 (reprompting user to get next step)
    }else if(option === 2){//skip above if statement and perform the following actions if 2 is selected
        if(toDoList.length !== 0){

        
        console.log("\n~ Completing a new to-do item ~");//print statement
        console.log("Which to-do item would you like to complete?");//print statement
        
        displayList();//run displayList function

        let newStatus = Number(prompt("> "));

        
        while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){//error check to make sure user inputs number
            
            console.log("Please input a number that corresponds to an item in list: ");
            newStatus = Number(prompt("> "));
        }

        statusArray[newStatus-1] = true;
    }else{
        console.log("Please add something to your to-do list before trying to complete an item.");
    }

        //complete an item
        displayList()//see displayList function at/near line 85-105
        //reprompt user
        selectOption();//see selectOption function at/near line 73-79 (reprompting user to get next step)
    }else{//if user does not selct option 1 || 2 || 3(selection of 3 is accounted for in line 49)
        console.log("\nInvalid Operation");//prints statement

        //reprompt user
        selectOption();///see selectOption function at/near line 73-79 (reprompting user to get next step)
    }
}
//Exiting Application//here is where we account for user entering option === 3//outside loop
console.log("~Exiting To-do-List Application~");

function selectOption(){ //displays our list of options without having to rewrite every time we re-prompt
        console.log("\n~ Select an action ~");//logs following statements when program is initialized
        console.log("[1] Create a to-do item");
        console.log("[2] Complete a to-do item");
        console.log("[3] Exit To-do List Application")
        option = Number(prompt('> '));//number casts user input in case user enters "1", "2", "3"
}
//THE FOLLOWING FUNCTION BASICALLY EQUATES TO (EXAMPLE IF YOU ADD THREE ITEMS TO YOUR TO-DO LIST)
//You have 3 to-do item(s)
//1. dishes
//2. laundry
//3. walk dog
function displayList(){ ///display our list without having to rewrite for loop every time
    if(toDoList.length === 0){
        console.log("Your to-do list is empty.")
    }else{
        console.log(`You have ${toDoList.length} to-do item(s)`)//you have "this many" to-do items
    }

    for(let i = 0; i<toDoList.length; i++){//while index is less than toDoList length progress through index
        let status = "";

        if(statusArray[i] === false){
            status = "[incomplete]";
        }else if(statusArray[i] === true){
            status = "[complete]";
        }
        
        console.log(`${i+1}. ${status} ${toDoList[i]}`);//prints consective numbers starting from 1. to items pushed to toDoList in line 27
    }                                        
        

}                                             
/*
TO DO LIST
///1. FIGURE OUT THE UI
.console.log()
    -welcome message
    -different options (add tasks, complete tasks, exit program)
    -error messages for invalid options
    -spacing/seperators to make program look nice
prompts
    -numbers to decide which option using ifs
    1 adding a task/creating an item - prompt user for item to create
    2 mark task as ccomplete - prompt user which task is complete
    3 exit program
while loop
    program has no known ending so we want to be able to prompt user indefinately until program is exited
display the to-do list to the user
    -completion status
    -the name of the item
    -the number associated with the item
    -loop to display each item in the to-do list

///2. ADD TO-DO ITEMS (choice is === 1)
    -prompt for the to-do item
    -save the item by storing it in an array - .push()
    -we need an array to keep track of to-do items - Global variable(so we can access for choice 1 and choice 2)


///3a. HOW DO WE SET ITEMS TO BE INCOMPLETE
    -any item in the list is "incomplete" until user makes it "complete"
    -whenever we add item to to-do list it is incomplete by default (until instructed to be complete by user)

    array of booleans
    true = complete
    false = incomplete

    [true,        false,      true]     status array (true = complete, false = incomplete)
    ['walk dog', 'get food', 'go walk'] toDoList array
    index 0          1           2      shared index

    let status = [];
    by default, when we add a new item, we want to add a false boolean to our status array


///3b.COMPLETE TO-DO ITEMS
    -display current items in the toDo list with their status
    -pick which toDo item to mark as complete and swap status from false to true
    -display the updated list right after


*/
