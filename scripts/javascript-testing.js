var face = {
    eyeColour:"green",
    age:23,height:'6ft 1',
    eyeAndAge: function(){
        return this.eyeColour + " " + this.age; 
    }
};
///slice and replaceing strings 
var str1 = "find the possition of the right word possition";
str1 = str1.replace(/possition/g,"possition replaced");
var str2 = "add this to end of string ";
var str3 = (str1.concat(" ",str2)).toUpperCase();
document.getElementById("paragraph").innerHTML=String(str3);
var test1 = 0xF8;
document.write("</br><div id='buttonWrapper'><p id='button'>" + test1 +"</p></div>");
//array testing
var array1 = ["apple","orange","lemon"];
document.write(array1 + " ------>"); array1.splice(0,0,"hello","today","tomorow");
document.write(array1 + "</br></br>");var x  = 0;

var ary = ["one","two","three","four"];
for(i in ary){
    document.write("</br>" + ary[i]);
}
//try and catch and finaly
try{
    document.write(testingTesting212);
}
catch(error){
    document.write("</br></br>" + error);
}
//global test
document.write("</br>" + "<p style='text-align:center;color:red;font-weight:bold;text-transform:capitalize;'>" +testGlobal + "</p></br>");


