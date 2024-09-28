//loops i avascript
//For loop 
for (var a=0; a<=10; a++){  //increment
    console.log(a)
}
for (var a=0; a<=10; a--){  //decrement
    console.log(a);
}

//While loop
let x=0;
while(x<=10){
    console.log("Hello");
    x++;
}

//Do-While
let b=0;
do{
    console.log(b);
    b++;
}while(a<5);
//for-in
var Names={name:'roa',degree:'BSC',city:'Chennai'}
for(let key in Names){
    console.log(key + '::' + Names[key]);
}
//for-of
var Group=['BSC','MSC','MCA','CSE'];
for(let value of Group){
    console.log(value);
}

// Control Statements in javascript
//if else statement
let New=10;
if(New>0){
    console.log("correct answwer");
}else{
    console.log("not correct answer");
}
//Switch statement
let day =5;
switch(day){
    case 1:
        console.log("Sunday");
     break;
    case 2:
        console.log("Monday");
     break;
    case 3:
        console.log("Tuesday");
     break;
    case 3:
        console.log("wednesday");
     break;
    case 4:
        console.log("Thursday");
     break;
    case 5:
        console.log("Friday");
     break;
    case 6:
        console.log("Saturday");
     break;

    default:
        console.log("Invalid day");
}
//Execution context 
//call stack and execution context
function NName(){
    console.log("First");
}
function my(){
    NName();
    console.log("second")
}
my();








//Global & Function execution context
var Name ="Global  Execution";
function Out(){
    var Out="This is priya";
    function Int(){
        var Int="This Is Roja";
        console.log(Name);//accessing global context variables
        console.log(Out);//accessing out function context variable 
        console.log(Int); //accessing int function context variables
    }
    Int();
    
}
Out();


