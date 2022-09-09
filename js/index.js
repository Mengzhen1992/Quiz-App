// bookmarkButton toggle
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = bookmarkButton.querySelector("i");

bookmarkButton.addEventListener("click", () => {
  if (bookmarkIcon.classList.contains("fa-solid")) {
    bookmarkIcon.classList.remove("fa-solid");
    bookmarkIcon.classList.add("fa-regular");
  } else if (bookmarkIcon.classList.contains("fa-regular")) {
    bookmarkIcon.classList.remove("fa-regular");
    bookmarkIcon.classList.add("fa-solid");
  }
});

// answerButton toggle
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.createElement("p");

answerButton.addEventListener("click", () => {
  answerButton.classList.toggle("hidden");
  if (answerButton.textContent.trim() === "Show Answer") {
    answerButton.textContent = "Hide Answer";
    answerButton.after(answerText);
    answerText.classList.add("card__answer-text");
    answerText.textContent = "static";
  } else if (answerButton.textContent.trim() === "Hide Answer") {
    answerButton.textContent = "Show Answer";
    answerText.remove();
  }
});
