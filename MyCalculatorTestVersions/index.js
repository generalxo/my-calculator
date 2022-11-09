/* 
//CALC V3.

const calculatorKeys = document.querySelector('.calculator-keys');
const calculatorScreen = document.querySelector('.calculator-screen');
//Creating Three Variables for 3 numbers and 1 for operators
let history = 0;
let savedNumber = 0;
let result = 0;
let savedOperator = "";

//Function Update Screen
function UpdateScreen(value){
    history += value;
    return history;
};

//Save Number Function
function SaveNumber(history){
    savedNumber = history;
    history = 0;
    return history;
};

//Addition Function
function Addition(history, savedNumber){
    result = Number(history) + Number(savedNumber);
    return result;
};

//Subtraction Function
function Subtraction (savedNumber, history){
    result = Number(savedNumber) - Number(history);
    return result;
};

//Division Function
function Division (savedNumber, history){
    result = Number(savedNumber) / Number (history);
    return result;
};

//Multiply function
function Multiply (history, savedNumber){
    result = Number(history) * Number(savedNumber);
    return result;
}

function ClearAll(){
    history = 0;
    savedNumber = 0;
    result = 0;
    operator = ""
    calculatorScreen.setAttribute('value', history);
}


function HandleClick (event){
    
    const value = event.target.getAttribute('value');

   //Switch For different buttons.
   switch(value){
    default:
        //calculatorScreen.setAttribute('value', value);
        UpdateScreen(value);
        calculatorScreen.setAttribute('value', Number(history));
    break;

    case '+':

        if (savedNumber == 0){
            history = SaveNumber(history);
            console.log("savedNumber")
            console.log(savedNumber)
            savedOperator = '+';
        }
        else {
            savedNumber = Addition(savedNumber, history);
            history = 0;
            console.log("savedNumber")
            console.log(savedNumber)
            calculatorScreen.setAttribute('value', savedNumber);
        }
        
    break;

    case '-':
        
        if (savedNumber == 0){
            history = SaveNumber(history)
            console.log("savedNumber")
            console.log(savedNumber)
            savedOperator = '-';
        }

        else{
            savedNumber = Subtraction(savedNumber, history);
            history = 0;
            console.log("savedNumber")
            console.log(savedNumber)
            calculatorScreen.setAttribute('value', savedNumber);
        }

    break;

    case '/':

        if(savedNumber == 0){
            history = SaveNumber(history);
            savedOperator = '/';
        }

        else{
            savedNumber = Division(savedNumber, history);
            history = 0;
            calculatorScreen.setAttribute('value', savedNumber);
        }

    break;

    case '*':
        
        if(savedNumber == 0){
            history = SaveNumber(history);
            savedOperator = '*';
        }

        else{
            savedNumber = Multiply(savedNumber, history);
            history = 0;
            calculatorScreen.setAttribute('value', savedNumber);
        }
        
    break;

    case null:
        console.log("Null HAPPENED")
        calculatorScreen.setAttribute('value', Number(history))
    break;

    case 'Clr':
        ClearAll();
        console.log("Clr Ran")
        calculatorScreen.setAttribute('value', Number(history))
    break;


    case '=':
        switch(savedOperator){
            case '+':
                    if(savedNumber !== 0){
                        result = Addition(savedNumber, history)
                        calculatorScreen.setAttribute('value', result)
                    };
                break;
                
                case '*':
                    if (savedNumber !== 0){
                        result = Multiply(savedNumber, history)
                        calculatorScreen.setAttribute('value', result)
                    }
                break;

                case '/':
                    if (savedNumber !== 0){
                        result = Division(savedNumber, history)
                        calculatorScreen.setAttribute('value', result)
                    }
                break;

                case '-':
                    if (savedNumber !== 0){
                        result = Subtraction(savedNumber, history)
                        calculatorScreen.setAttribute('value', result)
                    };
                break;
        }
    break;

   };

  

    

};

//Adding event listener when clicking on calculator-keys <div class="calculator-keys">
calculatorKeys.addEventListener('click', HandleClick);


//Test code
//console.log()
//console.log(typeof)

 */