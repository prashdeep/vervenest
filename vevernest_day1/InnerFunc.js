var outerFunction = function(arg1, arg2){
    var variable1 = "value";
    var self = this;
    console.log("The this will point to ",this);
    var inner  = function(){
        console.log("Argument1: "+arg1);
        console.log("Argument2: "+arg2);
        console.log("Variable1 "+variable1);
        console.log("The this will point to inside the inner function ", self);
    }
    inner();
}
var user={name:'vinay'};

outerFunction.call(user,"Hello","World");