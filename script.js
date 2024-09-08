//set up and initialisation
document.addEventListener("DOMContentLoaded", function(){
   const inputScreen=document.getElementById("input-screen");
   const displayField= document.getElementById("display");
   const buttons=document.querySelectorAll("button");// selects all buttons in html
   let expression ="";
   let shouldClearInput=false;//to make the input screen 0 after every caculaTION

   //clearInputScreen
   function clearInputScreen(){
     expression="";
     inputScreen.value="";
     displayField.value="";
     shouldClearInput=false;

   }
   //BACKSPACE
   function deleteLastCharacter(){
     expression=expression.slice(0,-1);//to delete the last character
     inputScreen.value=expression;

   }
   //for RESULT
   function evaluateExpression(){
     try{
        const result=eval(expression).toString();
        displayField.value= expression;
        inputScreen.value=result;
        shouldClearInput=true;
        expression="";

     } catch(error){
       inputScreen.value="Error";
     }
   }
   //FOR OPERATION 
   function addOperator(operator){
     if(shouldClearInput){
        clearInputScreen();
     }
     expression=expression+operator;
     inputScreen.value=expression;
   }
   //to append a number or dot to expression
   function appendToExpression(text){
    if(shouldClearInput){
        clearInputScreen();
     }
     expression=expression+text;
     inputScreen.value=expression;
   }
   //fucntion  for handleOperation(sqrt,1/x,+/-)
   function handleOperation(operation){
     //if expression is empty or not
     if(expression==="")
       return;
      let result;
      //convert expression to number
      const currentValue=parseFloat(expression);
     //perform operation
     switch(operation){
      case "toggleSign":
        result= currentValue * -1;
        console.log(result);
        break;
      case "sqrt":
        result= Math.sqrt(currentValue);
        expression=`\u221A(${currentValue})`;//for displaying sq.root sign
        break;
      case "reciprocal":
          result= 1 / currentValue ;
          expression=`1 / ${currentValue} `;
          break;
      case "percentage":
          result= currentValue/100;
          expression=`${currentValue}%`;
          break;
     }
     displayField.value=expression;
     expression= result.toString();
     inputScreen.value=expression;
     shouldClearInput="true";
   }

   //Add event listener to each button
buttons.forEach(function(button){//to repeat a block of code without adding for or whiile loops for every array
 button.addEventListener("click", function(){
    if(button.classList.contains("clear-icon")){
        clearInputScreen();
        console.log("Clicked!");
    }else if(button.classList.contains("delete-icon")){
         deleteLastCharacter();
         console.log("Clicked!");
    }else if(button.classList.contains("equals-icon")){
        evaluateExpression();
        console.log("Clicked!");
    }else if(button.classList.contains("divide-icon")){
        addOperator("/");
        console.log("Clicked!");
    }else if(button.classList.contains("multiply-icon")){
        addOperator("*");
        console.log("Clicked!");
    }else if(button.classList.contains("plus-icon")){
        addOperator("+");
        console.log("Clicked!");
    }else if(button.classList.contains("minus-icon")){
        addOperator("-");
        console.log("Clicked!");
    }else if(button.classList.contains("mod-icon")){
        addOperator("%");
        console.log("Clicked!");
    }else if(button.classList.contains("power-icon")){
      addOperator("**");  
    }else if(button.classList.contains("toggle-sign-icon")){
      handleOperation("toggleSign");
    }else if(button.classList.contains("squareroot-icon")){
      handleOperation("sqrt");
    }else if(button.classList.contains("reciprocal-icon")){
      handleOperation("reciprocal");
    }else if(button.classList.contains("percent-icon")){
      handleOperation("percentage");
    }else{
        appendToExpression(button.innerText);
        console.log("Clicked!");
    }

     
 })

})

});