var name = "mohan";
var name = "hari"

//console.log("The name is "+name);

var scopeCheck = function(){
    console.log("accessing the message on top "+message);
    var flag = false;
    
    if(flag){
        let message = "Flag value is true";
    }
    console.log(message);
    console.log("accessing the message after initializatin "+message);
   // console.log(age);
}
scopeCheck();
//console.log("Value of message outside the function is "+message);

/*for ( let i = 0; i < 10; i ++){
    console.log(" The value of i inside the loop is "+ i);
}*/
//console.log("The value of i outside the loop is "+i);