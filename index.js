//Color buttons.
// IDs / variables
const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const randomBtn = document.getElementById("randomBtn");
const body = document.getElementsByTagName("body")[0];

//Button functions
greenBtn.onclick = function() {
    body.style.backgroundColor = "hsl(120, 100%, 40%)";
}
redBtn.onclick = function() {
    body.style.backgroundColor = "hsl(0, 100%, 50%)";
}
blueBtn.onclick = function() {
    body.style.backgroundColor = "hsl(240, 100%, 50%)";
}
randomBtn.onclick = function () {
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const red = Math.round(Math.random() * 255);

    const color = `rgb(${green}, ${blue}, ${red})`;
    body.style.backgroundColor = color;
}

//Palindrome checker

const palindromeCheck = document.getElementById("palindromeCheck");
const palindromeBtn = document.getElementById("palindromeBtn");

palindromeBtn.onclick = function() {
    const stringCheck = palindromeCheck.value;
    console.log(stringCheck);
    // const palindromeLength = palindromeCheck.length;
    const reverse = stringCheck.split("").reverse().join("");

    if(stringCheck === reverse) {
        alert(`${stringCheck} is a palindrome.`)
    }
    else {
        alert(`${stringCheck} is not a palindrome.`)
    }
    palindromeCheck.value = "";
}

//Random quote generator

const quoteDiv = document.getElementById("quoteDiv");
const quoteBtn = document.getElementById("quoteBtn");

const quotes = [
    "Get busy living or get busy dying.",
    "To be or not to be.",
    "You are or you may not.",
    "Are dumb och smart be",
    "The sound of silence.. is awsome.",
]

const usedQuotes = [];
let i = 0
quoteBtn.onclick = function() {
    if(i <= 4) {
        for (i ; i < quotes.length; ) {
            console.log(i);
            quoteDiv.textContent = quotes[i];
            i++;
            break;
        }
    } else {
        let quoteNumber = Math.round(Math.random() * (quotes.length - 1));
        console.log(quoteNumber);
        quoteDiv.textContent = quotes[quoteNumber];
    }
}

//Todo list

const todoInput = document.getElementById("todoInput");
const itemDiv = document.getElementById("itemDiv");
let items = [];
const storageKey = "items";

function renderItems() {
    itemDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemDiv.appendChild(container);
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function addItem() {
    const value = todoInput.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    }
    items.push(todoInput.value);
    renderItems()
    todoInput.value = "";
    saveItems();
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);