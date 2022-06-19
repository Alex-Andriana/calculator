function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(x, y, op){
    if(op == "+"){
        return add(x, y);
    }
    else if(op == "-"){
        return substract(x, y);
    }
    else if(op == "*"){
        return multiply(x, y);
    }
    else if(op == "/"){
        return divide(x, y);
    }

}
//display text
let text = '';

//***query buttons***
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const period = document.querySelector("#period");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const dvd = document.querySelector("#dvd");
const equal = document.querySelector("#equal");
const mult = document.querySelector("#mult");
const power = document.querySelector("#power");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");

//query sound
const audio = new Audio('click.mp3');


const disp_text = document.querySelector("#diplaytext");
disp_text.textContent = text;

//operation phase detectors

//first operand . expect number input => op1
//operator . expect a single operand => oper
//second operand. expect number input => op2

let operator=''; // empty when waiting for new operator
let op1 = ''; //empty when entering first number
let op2 = ''; 

//
//***add event to buttons***

one.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '1';
    }
    else{
        op1 = op1 + '1';
    }
    text = text + "1";
    disp_text.textContent = text;

});

two.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '2';
    }
    else{
        op1 = op1 + '2';
    }
    text = text + "2";
    disp_text.textContent = text;


});

three.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '3';
    }
    text = text + "3";
    disp_text.textContent = text;

});

four.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '4';
    }
    text = text + "4";
    disp_text.textContent = text;

});

five.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '5';
    }
    text = text + "5";
    disp_text.textContent = text;

});


six.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '6';
    }
    
    text = text + "6";
    disp_text.textContent = text;

});


seven.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '7';
    }
    text = text + "7";
    disp_text.textContent = text;

});

eight.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '8';
    }
    text = text + "8";
    disp_text.textContent = text;

});

nine.addEventListener('click',() => {
    audio.play();
    if(operator != ''){
        op2 = op2 + '9';
    }
    text = text + "9";
    disp_text.textContent = text;

});

zero.addEventListener('click',() => 
{
    audio.play();
    if(operator != ''){
        op2 = op2 + '0';
    }
    text = text + "0";
    disp_text.textContent = text;

});

//operators
plus.addEventListener('click', () => 
{
    audio.play();
    
    if(op2 == '')
    {
        if(op1 == ''){
            //do nothing
        }
        else
        {
            if(operator == '')
            {
                operator = '+';
                text = text + operator;
                disp_text.textContent = text;
            }
            else
            {
                text = "SYNTAX ERROR";
disp_text.textContent =text;

            }
        }
    }
    else
    {
        // chain operation
        // something in op2
        op1 = operate(parseFloat(op1), parseFloat(op2), operator);
        op2 = '';
        text = op1;
        text = text + '+';
        operator = '+';
        disp_text.textContent = text;
    }
});

minus.addEventListener('click', ()=>{
    audio.play();
    if(op2 == '')
    {
        if(op1 == ''){
            //do nothing
        }
        else
        {
            if(operator == '')
            {
                operator = '-';
                text = text + operator;
                disp_text.textContent = text;
            }
            else
            {
                text = "SYNTAX ERROR";
disp_text.textContent =text;

            }
        }
    }
    else
    {
        // chain operation
        // something in op2
        op1 = operate(parseFloat(op1), parseFloat(op2), operator);
        op2 = '';
        text = op1;
        text = text + '-';
        operator = '-';
        disp_text.textContent = text;
    }

});

mult.addEventListener('click', ()=>{
    audio.play();
    if(op2 == '')
    {
        if(op1 == ''){
            //do nothing
        }
        else
        {
            if(operator == '')
            {
                operator = '*';
                text = text + operator;
                disp_text.textContent = text;
            }
            else
            {
                text = "SYNTAX ERROR";
                disp_text.textContent =text;

            }
        }
    }
    else
    {
        // chain operation
        // something in op2
        op1 = operate(parseFloat(op1), parseFloat(op2), operator);
        op2 = '';
        text = op1;
        text = text + '*';
        operator = '*';
        disp_text.textContent = text;
    }

});

dvd.addEventListener('click', ()=>{
    audio.play();
    if(op2 == '')
    {
        if(op1 == ''){
            //do nothing
        }
        else
        {
            if(operator == '')
            {
                operator = '/';
                text = text + operator;
                disp_text.textContent = text;
            }
            else
            {
                text = "SYNTAX ERROR";
disp_text.textContent =text;

            }
        }
    }
    else
    {
        // chain operation
        // something in op2
        op1 = operate(parseFloat(op1), parseFloat(op2), operator);
        op2 = '';
        text = op1;
        text = text + '/';
        operator = '/';
        disp_text.textContent = text;
    }

});

period.addEventListener('click', ()=>{
    audio.play();
    if(operator != ''){
        op2 = op2 + '.';
    }
    text = text + ".";
    disp_text.textContent = text;
});

equal.addEventListener('click', ()=>{
    audio.play();
    if(op2 == ''){
        text = op1;
    }
    else{
    text=operate(parseFloat(op1), parseFloat(op2), operator)}

    disp_text.textContent = text;
    operator = '';
    op1 = text;
    op2 = '';



});

del.addEventListener('click', ()=>{
    audio.play();
    text=text + 'D';
    disp_text.textContent = text;

});

clear.addEventListener('click', ()=>{
    audio.play();
    text='';
    op1 = '';
    op2 = '';
    operator = '';
    disp_text.textContent = text;

});

power.addEventListener('click', ()=> {
    audio.play();
    text='';
    op1 = '';
    op2 = '';
    operator = '';
    disp_text.textContent = text;
});

