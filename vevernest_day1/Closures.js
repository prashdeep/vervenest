
  let userObj = function(firstname, lastname){
      var firstName = firstname;
      var lastName = lastname;

      return {
         setFirstName:function(fName){
             firstName = fName;
         },
         getFirstName : function(){
          return firstName;
         },
         setLastName : function(lName){
            lastName = lName;
         },
         getLastName : function(){
            return lastName;
         }
        }
  }

  var ramesh = userObj("Ramesh","Kumar");
  ramesh.setFirstName("Ram");
  console.log(ramesh.getFirstName());

