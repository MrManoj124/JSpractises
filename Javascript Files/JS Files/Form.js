const quiz = [
    {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
    },
    {
    question: "What does CSS stand for?",
    options: ["Creative Style System", "Cascading Style Sheets", "Color Style Sheet", "Computer Style System"],
    answer: 1
    },
    {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    answer: 0
    }
];

let index = 0;
let score = 0;


function loadQuestion() {
document.getElementById("result").innerText = "";


let q = quiz[index];
document.getElementById("question").innerText = q.question;
document.getElementById("label1").innerText = q.options[0];
document.getElementById("label2").innerText = q.options[1];
document.getElementById("label3").innerText = q.options[2];
document.getElementById("label4").innerText = q.options[3];


let radios = document.getElementsByName("option");
for (let i = 0; i < radios.length; i++) {
radios[i].checked = false;
}
}