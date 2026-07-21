const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correct: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1
  },
  {
    question: "Who is known as the Father of the Nation of India?",
    answers: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Subhas Chandra Bose"],
    correct: 0
  }
];
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  question.textContent = q.question;
  answers.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.className = "btn";
    button.onclick = () => checkAnswer(index);
    answers.appendChild(button);
    answers.appendChild(document.createElement("br"));
    answers.appendChild(document.createElement("br"));
  });
}

function checkAnswer(index) {
  const buttons = answers.querySelectorAll("button");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === questions[currentQuestion].correct) {
      button.style.backgroundColor = "green";
      button.style.color = "white";
    } else if (i === index) {
      button.style.backgroundColor = "red";
      button.style.color = "white";
    }
  });
if (index === questions[currentQuestion].correct) {
    score++;
    
 setTimeout(() => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    question.textContent = `Quiz Finished! Score: ${score}/${questions.length}`;
    answers.innerHTML = "";
    nextBtn.style.display = "none";
  
}, 1000);
  }
}



  

loadQuestion();
