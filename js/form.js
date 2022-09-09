//form create new Cards
const form = document.querySelector('[data-js="form"]');
const newCard = document.createElement("section");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  newCard.classList.add("card");
  newCard.innerHTML = `
  <button class="card__bookmark-icon" aria-label="bookmark icon">
  <i class="fa-solid fa-bookmark"></i>
  </button>
  <p></p>
  <button class="card__answer-button hidden">Hide Answer</button>
  <p class="card__answer-text"></p>
  <ul class="card__tag-list">
  <li class="card__tag"></li>
  </ul>`;
  newCard.querySelector("p").textContent = data.question;
  newCard.querySelector(".card__answer-text").textContent = data.answer;
  newCard.querySelector("li").textContent = `#${data.tag}`;
  form.append(newCard);
});

// form field text counter
// 1. question textarea
const questionElement = document.querySelector('[data-js="question"]');
const questionAmountLeft = document.querySelector(
  '[data-js="questionAmountLeft"]'
);
const questionMaxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (amoutLeft, value) => {
  amoutLeft.innerText = value;
};

updateAmountLeft(questionAmountLeft, questionMaxLength);

questionElement.addEventListener("input", () => {
  const currentLength = questionMaxLength - questionElement.value.length;
  updateAmountLeft(questionAmountLeft, currentLength);
});

// 2. answer textarea
const answerElement = document.querySelector('[data-js="answer"]');
const answerAmountLeft = document.querySelector('[data-js="answerAmountLeft"]');
const answerMaxLength = answerElement.getAttribute("maxlength");

updateAmountLeft(answerAmountLeft, answerMaxLength);

answerElement.addEventListener("input", () => {
  const currentLength = answerMaxLength - answerElement.value.length;
  updateAmountLeft(answerAmountLeft, currentLength);
});
