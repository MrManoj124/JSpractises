//let Message = alert("Hey Manorooban");
//let Message = confirm("Ok === True\n Cancel === false");

let Message = prompt("Enter Your Name: ");
if(Message)
{
    console.log(Message ?? "Didn't enter the value");
}
else {
    console.log("You Didn't enter your name");
}
console.log(Message.length);
 