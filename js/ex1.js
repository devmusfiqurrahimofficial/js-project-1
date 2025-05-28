console.log("This is ex1.js");
var firstName="Musfiqur"
var lastName="Rahim"
var dateOfBirth=19
var name=document.getElementById("student_message").innerHTML
var name=document.getElementById("student_message").innerHTML="Hi my name is " + firstName +" "+lastName+"."+"I am " +dateOfBirth +" years old."
console.log(name);
var num1=document.getElementById("num_1").innerHTML
var num2=document.getElementById("num_2").innerHTML
var result=parseInt(num1)/parseInt(num2)
var result1=result.toFixed(2)
document.getElementById("result").innerHTML=result1
var result1=result.toFixed(3);


    var phone1 = "988866552";
    var phone2 = "99087612366";
    var phone3 = 876543123;


    var phone1a = phone1.toString().length;
    var phone2a = phone2.toString().length ;
    var phone3a = phone3.toString().length;

    if (phone1a==9) {
        console.log("this is valid");
        
        
    }
    else{
        console.log("this is invalid");
    }
 if (phone2a==9) {
        console.log("This is valid");
        
    }
    else{
        console.log("this is invalid");
    } if (phone3a==9) {
        console.log("This is valid");
        
    }
    else{
        console.log("this is invalid");
    }

    var opp=Math.pow(32,6);; 
    console.log(opp);
    

 document.getElementById("a").innerHTML= "a) var NAME; (Valid)"
  document.getElementById("b").innerHTML="b) var $num1; (valid)"
    document.getElementById("c").innerHTML="c) var typeof; (invalid .because typeof  is a function of JavaScript)"
     document.getElementById("d").innerHTML="d) var first-name; (valid)"
     document.getElementById("e").innerHTML="e) var attempt_2; (valid)"

      document.getElementById("f").innerHTML="f) var 2ndAttempt (invalid .because first letter is number)"
        document.getElementById("g").innerHTML="g) var full name; (invalid.because space used)"

        
     var url1=document.getElementById("url_1").innerHTML
     document.getElementById("url_2").innerHTML="https://" +url1
  
       document.getElementById("url_4").innerHTML="www.google.com"


