//Uppgift 1

let addTodoButton = document.querySelector("#addTodo");
let textInput = document.querySelector("input[name='todo']");

let todoList = document.querySelector("#todoList");

//När vi klickar på KNAPP, skriv ut värdet av INPUT till LIST i ett LI-element
// Extra: Skapa logik för att inte lägga in samma värde två gånger.
addTodoButton.addEventListener("click", () => {
    if(textInput.value !== ""){
        let listItem = document.createElement("li"); // Skapa li-tag
        listItem.innerText = textInput.value; //Ge värdet av användarens inmatning
        todoList.appendChild(listItem); // Lägg till i DOM:en
        textInput.value = "";
    }
})

//Uppgift 2

let result = document.querySelector("#result");
let inputNumber1 = document.querySelector("#tal1");
let inputNumber2 = document.querySelector("#tal2");
let additionButton = document.querySelector("#additionButton");

additionButton.addEventListener("click", () => {
    let number1 = parseInt(inputNumber1.value);
    console.log(number1);
    let number2 = parseInt(inputNumber2.value);

    let sum = number1+number2;
    result.innerHTML = sum;
})

// 2A
let multiply = document.querySelector("#multiplicationButton");

multiply.addEventListener("click", () => {
    let number1 = parseInt(inputNumber1.value); // Konvertera från string till int/number
    let number2 = parseInt(inputNumber2.value);

    let product = number1*number2;
    result.innerHTML = product;
})

//2B
let subtract = document.querySelector("#subtractionButton");
subtract.addEventListener("click", ()=>{
    let number1 = parseInt(inputNumber1.value); // Konvertera från string till int/number
    let number2 = parseInt(inputNumber2.value);
    // Lägg till logik
    let difference = number1-number2;
    if(difference < 0){
        alert("Resultatet blir mindre än 0. Vänligen skriv in giltiga värden");
    } else {
        result.innerHTML = difference;
    }
})

//3

let coloredNumber = document.querySelector("#coloredNumber");
coloredNumber.addEventListener("keyup",() => {
    let userValue = coloredNumber.value;
    if(userValue < 4){
        coloredNumber.style.color = "blue";
    } else if (userValue >= 4 && userValue <= 7){
        coloredNumber.style.color = "orange";
    } else if (userValue >7 && userValue < 11){
        coloredNumber.style.color = "green";
    }
})