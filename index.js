let question = 1;
let score = 0;
let selected = null;

let totalQuestions = document.querySelectorAll(".question-page").length;

// SELECT AN ANSWER
function selectAnswer(button) {

  if (selected) {
    selected.classList.remove("selected");
  }

  selected = button;
  selected.classList.add("selected");

  document.querySelector(
    "#question" + question + " .check-button"
  ).disabled = false;
}


// CHECK THE ANSWER
function checkAnswer() {

  if (!selected) return;

  let page = document.getElementById("question" + question);
  let correct = page.querySelector(".correct");
  let feedback = page.querySelector(".feedback");

  selected.classList.remove("selected");

  if (selected === correct) {
    score++;
    feedback.textContent = "Correct Answer!";
    feedback.classList.add("alert-success");
  } else {
    selected.classList.add("wrong");
    feedback.textContent = "Incorrect Answer! Correct answer: " +
      correct.textContent.trim();
    feedback.classList.add("alert-danger");
  }

  correct.classList.add("right");
  feedback.classList.remove("d-none");

  page.querySelectorAll(".answer").forEach(function(button) {
    button.disabled = true;
  });

  page.querySelector(".check-button").classList.add("d-none");
  page.querySelector(".next-button").classList.remove("d-none");
}


// NEXT QUESTION
function nextQuestion() {

  document.getElementById("question" + question)
    .classList.add("d-none");

  question++;
  selected = null;

  if (question <= 5) {
    document.getElementById("question" + question)
      .classList.remove("d-none");
  } else {
    document.getElementById("complete")
      .classList.remove("d-none");

    document.getElementById("score").textContent = score;
  }
}
