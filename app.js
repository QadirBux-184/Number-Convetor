const option1 = document.querySelector("#choice1");
const option2 = document.querySelector("#choice2");
const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const convert = document.querySelector("#btn1");
const reset = document.querySelector("#btn2");
const swap = document.querySelector("#btn3");
const input = document.querySelector("#num1");
const result = document.querySelector("#num2");
const inputBase = document.querySelector("#box1");
const resultBase = document.querySelector("#box2");
let optionVal;
let optionVal2;


// Now set the reset button
reset.addEventListener("click", ()=>{
    input.value = null;
    result.value = null;
});

// Now swapping the option Value
swap.addEventListener("click", ()=>{
  console.log("btn is clicked");

  const tempOption = option1.value;
  option1.value = option2.value;
  option2.value = tempOption;

  // Update the displayed text after swapping
  option1.dispatchEvent(new Event('change'));
  option2.dispatchEvent(new Event('change'));

  console.log("Options have been swapped!");

});

//choice 1
option1.addEventListener('change',()=>{
     optionVal = option1.value;
    para1.innerText = `Enter ${optionVal} Number`;
     changeBase(optionVal,inputBase);

});

//choice2
option2.addEventListener('change', ()=>{
     optionVal2 = option2.value;
     para2.innerText = `${optionVal2} Number`;
     changeBase(optionVal2,resultBase);
});


// convert the number 
convert.addEventListener("click", ()=>{
    const numValue = input.value;

    if(optionVal == null && optionVal2 == null){
        convertor(numValue, option1.value, option2.value);
    }
    else if(optionVal == null && optionVal2 != null){
        convertor(numValue, option1.value, optionVal2);
    }
    else
        convertor(numValue, optionVal, optionVal2);
});


// function for conversion
function convertor(input, inputSys, outputSys){
    let decimalNum;
    //before conversion check it is correct number or not
    const validPattern = {
        binary: /^[01]+$/,
        octal: /^[0-7]+$/,
        decimal: /^[0-9]+$/,
        hexadecimal: /^[0-9a-fA-F]+$/
    };

    if(! validPattern[inputSys.toLowerCase()].test(input)){
        result.value = `You have eneterd Invalid ${inputSys}`;
        return;
    }
    //Convert number based on decimal system
    switch(inputSys.toLowerCase()){
        case 'binary':
                    decimalNum = parseInt(input, 2);
                    break;
        case 'octal':
                    decimalNum = parseInt(input, 8);
                    break;
        case 'decimal':
                    decimalNum = parseInt(input, 10);
                    break;
         case 'hexadecimal':
                    decimalNum = parseInt(input, 16);
                    break;        
    }
   // Convert it to user's system
   let newNum;
   switch(outputSys.toLowerCase()){
    case 'binary':
                newNum = decimalNum.toString(2);
                break;
    case 'octal':
                newNum = decimalNum.toString(8);
                break;
    case 'decimal':
                newNum = decimalNum.toString(10);
                break;
    case 'hexadecimal':
                newNum = decimalNum.toString(16).toUpperCase();
   }
   result.value = newNum;
   result.readOnly = true;
}

// Change the base of number
function changeBase(sys, baseTag){
    switch(sys.toLowerCase()){
        case 'binary':
            baseTag.innerText = 2;
            break;
        case 'octal':
            baseTag.innerText = 8;
            break;
        case 'decimal':
            baseTag.innerText = 10;
            break;
        case 'hexadecimal':
            baseTag.innerText = 16;
            break;
    }
}





