//CALC V5

//query selectors
const calculator = document.querySelector('.calculator');
const calculatorScreen = calculator.querySelector('.calculator-screen');
const calculatorKeys = calculator.querySelector('.calculator-keys');

//changable variables
let savedNumber = 0;
let result = 0;
let screenValue = 0;
let tempValue = 0;
let savedKeyType = '';
let savedOperator = '';

//Save Functions
function SaveKeyType(keyType){
    savedKeyType = keyType;
}
function SaveScreenValue(screenValue){
    savedNumber = screenValue;
    screenValue = 0;
    result = 0;
}
function SaveOperator(keyValue){
    savedOperator = keyValue;
}

//Operator Functions

//Addition Function
function Addition(screenValue, savedNumber){
    result = Number(screenValue) + Number(savedNumber);
    return result;
};
//Subtraction Function
function Subtraction(savedNumber, screenValue){
    result = Number(savedNumber) - Number(screenValue);
    return result;
};

//Divison Function
function Division(savedNumber,screenValue){
    result = Number(savedNumber) / Number(screenValue);
    return result;
}

//Multiplication function
function Multiplication (screenValue, savedNumber){
    result = Number(savedNumber) * Number(screenValue);
    return result;
}

//Calculate Function
function CalculateNumbers(savedOperator){
    switch(savedOperator){

        case '+':
            result = Addition(savedNumber, screenValue);
            calculatorScreen.setAttribute('value', result);
            SaveScreenValue(result);
        break;

        case '-':
            result = Subtraction(savedNumber, screenValue);
            calculatorScreen.setAttribute('value', result);
            SaveScreenValue(result);
        break;

        case '/':
            result = Division(savedNumber, screenValue);
            calculatorScreen.setAttribute('value', result);
            SaveScreenValue(result);
        break;

        case '*':
            result = Multiplication(savedNumber, screenValue);
            calculatorScreen.setAttribute('value', result);
            SaveScreenValue(result);
        break;

    }
}

calculatorKeys.addEventListener('click', HandleClickEvent =>{
if(!HandleClickEvent.target.closest('button')) return

    const keyType = HandleClickEvent.target.className;
    console.log("keyType", keyType);

    const keyValue = HandleClickEvent.target.value;
    console.log("keyValue", keyValue);

    screenValue = calculatorScreen.getAttribute('value');
    console.log("screenValue", screenValue);

    switch(keyType){
        case 'number':

            if(screenValue === '0'){
                screenValue = keyValue;
                calculatorScreen.setAttribute('value', screenValue);
            }
            else if(savedKeyType === 'operator'){
                screenValue = keyValue;
                calculatorScreen.setAttribute('value', screenValue);
            }
            else {
                screenValue += keyValue;
                calculatorScreen.setAttribute('value', screenValue);
            }
            
            SaveKeyType(keyType);
            console.log("savedKeyType", savedKeyType);
        break;

        case 'operator':

            SaveKeyType(keyType);
            console.log("savedKeyType", savedKeyType);

            if(savedNumber === 0){
                SaveScreenValue(screenValue);
                console.log("savedNumber", savedNumber)
                SaveOperator(keyValue);
            }
            else{
                CalculateNumbers(savedOperator);
                SaveOperator(keyValue);
            }
            
        break;

        case 'function equal-sign':
            console.log("Function equal-sign Key Was Pressed")
            CalculateNumbers(savedOperator);
            savedOperator = '';
        break

        case 'function clear':
            screenValue = 0;
            savedNumber = 0;
            result = 0;
            savedKeyType = '';
            savedOperator = '';
            calculatorScreen.setAttribute('value', screenValue);
        break;

        case 'function decimal':
            screenValue += '.';
            calculatorScreen.setAttribute('value', screenValue);
        break;

    }


});