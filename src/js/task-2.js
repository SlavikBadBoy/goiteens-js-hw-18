const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsUl = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.textContent = ingredient;
  ingredientsUl.append(ingredientsLi);
}
