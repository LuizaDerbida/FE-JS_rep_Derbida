let operators = ["+", "-", "/", "*"];//основні оператори

let box = null;
let last_operation_history = null;
let operator = null;
let equal = null;
let dot = null;

let firstNum = true;

let numbers = [];
let operator_value;
let last_button;
let calc_operator;

let total;


function button_number(button) {

    operator = document.getElementsByClassName("operator");
    box = document.getElementById("box");
    last_operation_history = document.getElementById("last_operation_history");
    equal = document.getElementById("equal_sign").value;
    dot = document.getElementById("dot").value;
    
    last_button = button;

    // якщо кнопка не є оператором або знаком =
    if (!operators.includes(button) && button!=equal){

        // якщо ви натиснули першу кнопку
        if (firstNum){
            // і це крапка, поставити 0 на початку.
            if (button == dot){
                box.innerText = "0"+dot;
            }
            // або очистити бокс та показати ввод
            else {
                box.innerText = button;
            }
            firstNum = false;
        }
        
        else {

            // повертає значення, якщо значення поля дорівнює 0
            if (box.innerText.length == 1 && box.innerText == 0){

                if (button == dot){
                    box.innerText += button;
                }
                return;
            }

            //повертає, якщо у полі вже є крапка, а натиснена кнопка — теж крапка
            if (box.innerText.includes(dot) && button == dot){
                return;
            }

            // максимальна кількість дозволених чисел, що введені, дорівнює 20
            if (box.innerText.length == 20){
                return;
            }

            // якщо при натисканні крапки в боксі вже є знак -, показувати -0.
            if (button == dot && box.innerText == "-"){
                box.innerText = "-0"+dot;
            }

            // додати число
            else {
                box.innerText += button;
            }  
        }
    }

    // якщо це оператор або знак =
    else {

        // повернути, якщо оператор вже натиснуто
        if (operator_value != null && button == operator_value){
            return;
        }

        // показати знак мінус, якщо це перше вибране значення і повернути
        if (button == "-" && box.innerText == 0){
            box.innerText = button;
            firstNum = false;
            operator_value = button;
            showSelectedOperator();
            return;
        }
        // повертає, якщо натиснуто оператор -, і він вже надрукований на екрані
        else if (operators.includes(button) && box.innerText == "-"){
            return;
        }
        // повертає, якщо натиснуто оператор -, а історія вже занесла цей знак
        else if (button == "-" && operator_value == "-" && last_operation_history.innerText.includes("=")){
            return;
        }

        //встановити значення оператора, якщо воно одне
        if (operators.includes(button)){
            if (typeof last_operator != "undefined" && last_operator != null){
                calc_operator = last_operator;
            }
            else {
                calc_operator = button;
            }
            if (button == "*"){
                last_operator = "×";
            }
            else if (button == "/"){
                last_operator = "÷";
            }
            else {
                last_operator = button;
            }
            operator_value = button;
            firstNum = true;
            showSelectedOperator();
        }

        //додати перше число до масиву чисел і показати його з історії
        if (numbers.length == 0){
            numbers.push(box.innerText)
            if (typeof last_operator != "undefined" && last_operator != null){
                last_operation_history.innerText = box.innerText + " " + last_operator;
            }
        }
        //решта розрахунків
        else {   
            if (numbers.length == 1){
                numbers[1] = box.innerText;
            }
            let temp_num = box.innerText;

            //обчислити
            if (button==equal && calc_operator != null){
                let total = calculate(numbers[0], numbers[1], calc_operator);
                box.innerText = total;

                // додати друге число до історії
                if (!last_operation_history.innerText.includes("=")){
                    last_operation_history.innerText += " " + numbers[1] + " =";
                }

                temp_num = numbers[0];

                numbers[0] = total;
                operator_value = null;
                showSelectedOperator();

                // замінити перше число історії на значення загального
                let history_arr = last_operation_history.innerText.split(" ");
                history_arr[0] = temp_num;
                last_operation_history.innerText = history_arr.join(" ");
            }
            // оновити історію за допомогою значення на екрані та оператора
            else if (calc_operator != null) {
                 last_operation_history.innerText = temp_num + " " + last_operator;
                 calc_operator = button;
                 numbers = [];
                 numbers.push(box.innerText);
            }
        }
    }

}
 // якщо вибрано кнопку оператора, підсвічування
function showSelectedOperator(){

    let elements = document.getElementsByClassName("operator");

    for (let i=0; i<elements.length; i++){
        elements[i].style.backgroundColor  = "#e68a00";
    }

    if (operator_value == "+"){
        document.getElementById("plusOp").style.backgroundColor  = "#ffd11a";
    }
    else if (operator_value == "-"){
        document.getElementById("subOp").style.backgroundColor  = "#ffd11a";
    }
    else if (operator_value == "*"){
        document.getElementById("multiOp").style.backgroundColor  = "#ffd11a";
    }
    else if (operator_value == "/"){
        document.getElementById("divOp").style.backgroundColor  = "#ffd11a";
    }
}

//функція для обчислення результату за допомогою двох чисел і оператора
function calculate(num1, num2, operator){

    if (operator === "+"){
        total = (parseFloat)(num1)+(parseFloat)(num2);
    }
    else if (operator === "-"){
        total = (parseFloat)(num1)-(parseFloat)(num2);
    }
    else if (operator === "*"){
        total = (parseFloat)(num1)*(parseFloat)(num2);
    }
    else if (operator === "/"){
        total = (parseFloat)(num1)/(parseFloat)(num2);
    }
    else {
        if (total == box.innerText){
            return total;
        }
        else {
            return box.innerText;
        }
    }
    // якщо не ціле число, показувати максимум 12 десяткових знаків
    if (!Number.isInteger(total)){
        total = total.toPrecision(12);
    }
    return parseFloat(total);
}

//функція очищення і скидання
function button_clear(){
    window.location.reload();
}

function backspace_remove(){

    box = document.getElementById("box");
    let elements = document.getElementsByClassName("operator");

    for (let i=0; i<elements.length; i++){
        elements[i].style.backgroundColor  = "#e68a00";
    }

    let last_num = box.innerText;
    last_num = last_num.slice(0, -1);
    box.innerText = last_num;

    // показувати 0, якщо всі символи на екрані буде вилучено
    if (box.innerText.length == 0){
        box.innerText = 0;
        firstNum = true;
    }

}


//функція для зміни знаку числа, що зараз відображається на екрані
function plus_minus(){
    box = document.getElementById("box");

    // якщо будь-який оператор вже натиснуто
    if (typeof last_operator != "undefined"){
        if (numbers.length>0){
            // якщо натиснута остання кнопка є оператором
            if (operators.includes(last_button)){
                //якщо показаний текст є просто від'ємним знаком, замініть його на 0
                if (box.innerText == "-"){
                    box.innerText = 0;
                    firstNum = true;
                    return;
                }
                //якщо відображений текст не є просто від'ємним знаком, замініть його на від'ємний знак
                else {
                    box.innerText = "-";
                    firstNum = false;
                }
            }
            // якщо натиснута остання кнопка не є оператором, змініть її знак
            else {
                box.innerText = -box.innerText;

                if (numbers.length==1){
                    numbers[0] = box.innerText;
                }
                else {
                    numbers[1] = box.innerText;
                }
            }
        }
        return;
    }

    // якщо буде показано текст 0, замініть його на від’ємний знак
    if (box.innerText == 0){
        box.innerText = "-";
        firstNum = false;
        return;
    }
    box.innerText = -box.innerText;
}

// функція для обчислення квадратного кореня з числа, що зараз відображається на екрані
function square_root(){
    box = document.getElementById("box");
    let square_num = Math.sqrt(box.innerText);
    box.innerText = square_num;
    numbers.push(square_num);
}

//функція для обчислення ділення 1 з числом, яке зараз відображається на екрані
function division_one(){
    box = document.getElementById("box");
    let square_num = 1/box.innerText;
    box.innerText = square_num;
    numbers.push(square_num);
}

//функція для обчислення квадрату числа, що знаходиться на екрані
function power_of(){
    box = document.getElementById("box");
    let square_num =Math.pow(box.innerText, 2);
    box.innerText = square_num;
    numbers.push(square_num);
}

//функція для обчислення відсотка числа
function percentage(){
    let elements = document.getElementsByClassName("operator");
    box = document.getElementById("box");

    if (numbers.length > 0 && typeof last_operator != "undefined"){
        if (last_operator == "+" || last_operator == "-"){
            box.innerText = numbers*box.innerText/100;
        }
        else {
            box.innerText = box.innerText/100;
        }
    }
    else {
        box.innerText = box.innerText/100;
    }
    numbers = [];
    numbers.push(box.innerText);

    // якщо вибрано якийсь з інших операторів, зняти позначку з оператора
    for (let i=0; i<elements.length; i++){
        elements[i].style.backgroundColor  = "#e68a00";
    }
}

// функція очищення останнього номера, введеного на дисплеї
function clear_entry(){
    box = document.getElementById("box");

    if (numbers.length > 0 && typeof last_operator != "undefined"){
        box.innerText = 0;
        let temp = numbers[0];
        numbers = [];
        numbers.push(temp);
        firstNum = true;
    }
}

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);

// функція для захоплення подій
function keyPressed(e) {
    e.preventDefault();
    let equal = document.getElementById("equal_sign").value;
    let dot = document.getElementById("dot").value;

    if (e.key == "Delete"){
        button_clear();
        return;
    }

    let isNumber = isFinite(e.key);
    let enterPress;
    let dotPress;
    let commaPress = false;

    if (e.key == "Enter"){
        enterPress = equal;
    }
    if (e.key == "."){
        dotPress = dot;
    }
    if (e.key == ","){
        commaPress = true;
    }
    
    if (isNumber || operators.includes(e.key) || e.key == "Enter" || e.key == dotPress || 
        commaPress || e.key == "Backspace"){
        if (e.key == "Enter"){
            button_number(enterPress);
        }
        else if (e.key == "Backspace"){
            document.getElementById("backspace_btn").style.backgroundColor  = "#999999";
            backspace_remove();
        }
        else if (commaPress){
            button_number(dot);
        }
        else {
            button_number(e.key);
        }   
    }
}

// функція для Backspace
function keyReleased(e){
    e.preventDefault();
    // встановлює колір кнопки Backspace до початкового
    if (e.key == "Backspace"){
        document.getElementById("backspace_btn").style.backgroundColor  = "#666666";
    }
}