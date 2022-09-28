const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light_theme');
})

const copyTextareaBtnOne = document.querySelector('.copyBtn');
const copyTextareaBtnTwo = document.querySelector('.secCopyBtn');
const copied = document.querySelector('.sign');
const firstPass = document.getElementById('textOne');
const secPass = document.getElementById('textTwo');
const generateBtn = document.querySelector('.geneBtn');
const range = document.getElementById('quantity');
const capitalBtn = document.querySelector('.capital');
const numberBtn = document.querySelector('.number');
const characterBtn = document.querySelector('.character');
const selection = document.querySelector('.classic');



copyTextareaBtnOne.addEventListener('click', () => {
    let copyText = document.getElementById("textTwo").value;
    navigator.clipboard.writeText(copyText).then(() => {});
    copied.style.opacity = 1;
    setTimeout(() => {
        copied.style.opacity = 0;
    }, 1000);
})
copyTextareaBtnTwo.addEventListener('click', () => {
    let copyText = document.getElementById("textOne").value;
    navigator.clipboard.writeText(copyText).then(() => {});
    copied.style.opacity = 1;
    setTimeout(() => {
        copied.style.opacity = 0;
    }, 1000);
})


// assume that they are 16 characters long



const capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const smaLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|",
    ":", ";", "<", ">", ".", "?", "/"
];

let capp = false;
let numm = false;
let charr = false;
let c = 4;
let x = 4;
let y = 1;
let z = 1;
let f = 1;

selection.addEventListener('change', function() {
    if (this.value === "10") {
        c = 2;
        x = 5;
        y = 1;
        z = 1;
        f = 1;
    }
    if (this.value === "12") {
        c = 2;
        x = 6;
        y = 1;
        z = 1;
        f = 1;
    }
    if (this.value === "14") {
        c = 2;
        x = 7;
        y = 1;
        z = 1;
        f = 1;
    }
    if (this.value === "16") {
        c = 4;
        x = 4;
        y = 1;
        z = 1;
        f = 1;
    }
    if (this.value === "18") {
        c = 3;
        x = 6;
        y = 1;
        z = 1;
        f = 1;
    }
    if (this.value === "20") {
        c = 4;
        x = 5;
        y = 1;
        z = 1;
        f = 1;
    }

});

capitalBtn.addEventListener("click", () => {
    capitalBtn.classList.toggle('thechng');
    !capp ? capp = true : capp = false;
});
numberBtn.addEventListener("click", () => {
    numberBtn.classList.toggle('thechng');
    !numm ? numm = true : numm = false;
});
characterBtn.addEventListener("click", () => {
    characterBtn.classList.toggle('thechng');
    !charr ? charr = true : charr = false;
});

if (capp === true) {

}

let theColl = [];

generateBtn.addEventListener("click", () => {
    let string;
    let stringTwo;
    let theResult = [];
    let Result = [];

    firstPass.value = '';
    secPass.value = '';
    for (let i = 0; i < c; i++) {
        for (let i = 0; i < x; i++) {
            const ran = Math.floor(Math.random() * smaLetters.length);
            const rand = Math.floor(Math.random() * smaLetters.length);
            theResult.push(smaLetters[ran])
            Result.push(smaLetters[rand])
        }

        if (capp === true) {

            for (let i = 0; i < y; i++) {
                const ran = Math.floor(Math.random() * capLetters.length);
                const rand = Math.floor(Math.random() * capLetters.length);
                theResult.pop()
                Result.pop()
                if (numm === true) {
                    theResult.pop()
                    Result.pop()
                }
                theResult.push(capLetters[ran])
                Result.push(capLetters[rand])
            }
        }

        if (numm === true) {
            for (let i = 0; i < z; i++) {
                const ran = Math.floor(Math.random() * numbers.length);
                const rand = Math.floor(Math.random() * numbers.length);
                if (capp === false) {
                    theResult.pop()
                    Result.pop()
                }
                theResult.push(numbers[ran])
                Result.push(numbers[rand])
            }
        }
        if (charr === true) {
            for (let i = 0; i < f; i++) {
                const ran = Math.floor(Math.random() * characters.length);
                const rand = Math.floor(Math.random() * characters.length);
                if (capp === true) {
                    theResult.shift()
                    Result.shift()
                }
                if (numm === true && capp === false) {
                    theResult.shift()
                    Result.shift()
                }
                if (numm === false && capp === false) {
                    theResult.pop()
                    Result.pop()
                }
                theResult.push(characters[ran])
                Result.push(characters[rand])
            }
        }
    }
    string = theResult.join('')
    stringTwo = Result.join('')
    firstPass.value = string;
    secPass.value = stringTwo;

});