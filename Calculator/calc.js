function addTwoNumbers(){
    let firstNumber=parseInt(document.getElementById("first").value)
    let secondNumber=parseInt(document.getElementById("second").value)

    let result=firstNumber+secondNumber;
    document.getElementById("result").innerHTML=result;

    console.log("First Integer = "+firstNumber);
    console.log("Second Integer = "+secondNumber);
    console.log("Result = "+result);
     console.log("add");
}
function subTwoNumbers(){
    let firstNumber=parseInt(document.getElementById("first").value)
    let secondNumber=parseInt(document.getElementById("second").value)

    let result=firstNumber-secondNumber;
    document.getElementById("result").innerHTML=result;

    console.log("First Integer = "+firstNumber);
    console.log("Second Integer = "+secondNumber);
    console.log("Result = "+result);
console.log("sub");
}