//CALC V4.
const calculator = document.querySelector('.calculator');

const calculatorKeys = calculator.querySelector('.calculator-keys');
const calculatorScreen = calculator.querySelector('.calculator-screen');

let savedNumber = 0;
let result = 0;

//This will check what key was previously pressed
let previousKeyType = '';
let savedOperator = ''

//Functions Start
function SaveNumber(screenValue){
    savedNumber = screenValue;
    screenValue = 0;
    console.log("savedNumber")
    console.log(savedNumber)
    return screenValue;
}

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
    result = Number(savedNumber) / Number(screenValue)
    return result;
}

//Multiplication function
function Multiplication (screenValue, savedNumber){
    result = Number(savedNumber) * Number(screenValue);
    return result;
}
//Functions End

//Handle Click Event Start
calculatorKeys.addEventListener('click', event =>{
    if(!event.target.closest('button')) return

    console.log(event.target)

    //this will save what type of button was pressed
    const keyType = event.target.className
    //console.log("keyType")
    //console.log(keyType)

    //This will save the value of the key pressed
    const keyValue = event.target.value
    //console.log("keyValue")
    //console.log(keyValue)

    //screenValue will display the calculator screen value and is by default 0 
    let screenValue = calculatorScreen.getAttribute('value')
    
    //What type of key was pressed Start
    switch(keyType){
        //Case NUMBER Start
        case 'number':
            console.log("Number was pressed")
            
            if(screenValue === '0'){
                screenValue = keyValue;
                calculatorScreen.setAttribute('value', screenValue);
                
            }

            else if(previousKeyType === 'operator'){
                screenValue = keyValue;
                calculatorScreen.setAttribute('value', screenValue);
            }

            else {
                screenValue += keyValue;
                calculatorScreen.setAttribute('value', screenValue);
            }

            previousKeyType = 'number'
            console.log("previousKeyType")
            console.log(previousKeyType)

        break;
        //Case NUMBER End

        //Case OPERATOR Start
        case 'operator':
            console.log("Operator was pressed")
            
            switch(keyValue){
                case '+':
                    SaveNumber(screenValue)
                    savedOperator = '+';
                break;

                case '-':
                    SaveNumber(screenValue)
                    savedOperator = '-';
                break;

                case '/':
                    SaveNumber(screenValue)
                    savedOperator = '/';
                break;

                case '*':
                    SaveNumber(screenValue)
                    savedOperator = '*';
                break;
            }

            previousKeyType = 'operator'
        break;
        //Case OPERATOR End
        
        //case CLEARALL Start
        //Reset all values and display 0 
        case 'clear function':
            screenValue = 0;
            savedNumber = 0;
            savedOperator = '';
            previousKeyType = '';
            calculatorScreen.setAttribute('value', screenValue);
        break;
        //case CLEARALL End


        //case Equal Sign Start
        case 'operator equal-sign':
            console.log("equal button was pressed")
            
            switch(savedOperator){
                case '+':
                    result = Addition(savedNumber, screenValue);
                    calculatorScreen.setAttribute('value', result);
                    savedOperator = ''
                break;

                case '-':
                    result = Subtraction(savedNumber, screenValue)
                    calculatorScreen.setAttribute('value', result);
                    savedOperator = ''
                break;

                case '/':
                    result = Division(savedNumber, screenValue)
                    calculatorScreen.setAttribute('value', result);
                    savedOperator = ''
                break;

                case '*':
                    result = Multiplication(savedNumber, screenValue)
                    calculatorScreen.setAttribute('value', result);
                    savedOperator = ''
                break;
            }

            previousKeyType = '';
            
        break;
        //case Equal Sign End

    }
    //What type of key was pressed End

})
//Handle Click Event End