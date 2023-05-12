function calculator(choice){

    let firstNum=parseInt(document.getElementById("first").value)
    let secondNum=parseInt(document.getElementById("second").value)
    let(result)

    switch(choice){
        case 1:addition(firstNum,secondNum);break;
        result=num1+num2
        case 2:subtration(firstNum,secondNum);break;
        case 3:multiplication(firstNum,secondNum);break;
        case 4:division(firstNum,secondNum);break;

    }

    //------for addition-------------- 

    function addition(num1,num2){
        let result=num1+num2;
    document.getElementById("result").innerHTML=result;
    console.log("Result = "+result)
    return(result)
    }
    

    //----for substration-------------
    function subtration(num1,num2){
        let result=num1-num2;
    document.getElementById("result").innerHTML=result;
    console.log("Result = "+result)
    }
    

    //----for substration-------------
    function multiplication(num1,num2){
        let result=num1*num2;
    document.getElementById("result").innerHTML=result;
    console.log("Result = "+result)
    }
    

    //----for substration-------------
    function division(num1,num2){
        let result=num1/num2;
    document.getElementById("result").innerHTML=result;
    console.log("Result = "+result)
    }
    
}



  