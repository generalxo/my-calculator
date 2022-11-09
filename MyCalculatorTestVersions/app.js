/* 
//CALC V2.
//Div With the Class calculator-keys
const calculatorKeys = document.querySelector('.calculator-keys');

//Div With the Class calculator-screen
const calculatorScreen = document.querySelector('.calculator-screen');

//Creating Three Variables for 2 numbers and for 1 operators
let history = 0;
let savedNumber = 0;
let result = 0;
let operator = "";


//This Function will save the history value to savedNumber and reset the value of history to 0
function SaveNumber (history){
    savedNumber = history;
    history = 0;
    return history;
}

//Multiply function
function Multiply (history, savedNumber){
    result = Number(history) * Number(savedNumber);
    return result;
}

//Subtraction Function
function Addition (history, savedNumber){
    result = Number(history) + Number(savedNumber);
    return result;
};

//Subtraction Function
function Subtraction (savedNumber, history){
    result = Number(savedNumber) - Number(history);
    return result;
};

function Division (savedNumber, history){
    result = Number(savedNumber) / Number (history);
    return result;
};

//Addition Function
function Addition(history, savedNumber){
    result = Number(history) + Number(savedNumber);
    return result;

function ClearAll(){
    history = 0;
    savedNumber = 0;
    result = 0;
    operator = ""
    calculatorScreen.setAttribute('value', history);

}

function HandleClick(event){

    const value = event.target.getAttribute('value');
    calculatorScreen.setAttribute('value', value);
    
        //Swith
        switch(value){
            default:
                history = history + value;
                calculatorScreen.setAttribute('value', Number(history))
                console.log("After case default")
                console.log(history)
            break;

            case'+':

                if(savedNumber !== 0){
                        result = Addition(savedNumber, history)
                        calculatorScreen.setAttribute('value', result)
                    };
                
                history = SaveNumber(history)
                calculatorScreen.setAttribute('value', Number(history))
                operator = '+'
                
                
            break;

            case '-':
                history = SaveNumber(history)
                calculatorScreen.setAttribute('value', Number(history))
                operator = '-';
            break;

            case '*':
                history = SaveNumber(history)
                calculatorScreen.setAttribute('value', Number(history))
                operator = '*';
                
            break;

            case '/':
                history = SaveNumber(history)
                calculatorScreen.setAttribute('value', Number(history))
                operator = '/';
            break;

            case 'Clr':
                console.log("case Cl Ran")
                ClearAll();
            break;

            case null:
                console.log("Null HAPPENED")
                calculatorScreen.setAttribute('value', Number(history))
            break;

            case '=':
                //Switch will check what operator is set and preform the correlating function
                switch(operator){
                
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


//Click on calculatorKeys will preform the HandleClick function
calculatorKeys.addEventListener('click', HandleClick);
 */