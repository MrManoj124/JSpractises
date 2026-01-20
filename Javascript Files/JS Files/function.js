//function

function operations(num1,num2){
    if(num2== undefined){
    return num1+num1;
    }
    else{
        return num1+num2;
    }
}

console.log(operations(10,20));


function emailvalidation(email){
    return "manoj@gmail.com";
}
console.log(emailvalidation());

console.log("Mr. "+"manoj");

function findValue(obj, searchString)
{
    for(let key in obj){
        if(typeof obj[key] === 'string' && obj[key].includes(searchString))
        {
            return obj[key];
        }
    }
}
let data = {email: 'krisha@gmail.com', name:'krisha'};
let email = findValue(data, "@");

console.log(email);
