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
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  question.textContent = q.question;
  answers.innerHTML = "";
  nextBtn.style.display = "none";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.className = "btn";

    button.onclick = () => {
      checkAnswer(index);
    };

    answers.appendChild(button);
  });
}

function checkAnswer(index) {
  const buttons = answers.querySelectorAll(".btn");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === questions[currentQuestion].correct) {
      button.style.background = "green";
      button.style.color = "white";
    } else if (i === index) {
      button.style.background = "red";
      button.style.color = "white";
    }
  });

  if (index === questions[currentQuestion].correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = function () {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    question.innerHTML = `🎉 Quiz Finished!<br>Score: ${score}/${questions.length}`;
    answers.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();
