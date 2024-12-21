const counter = document.querySelector("#counter");
let counterValue = 0;

counter.addEventListener("click", (event) => {
  const target = event.target;

  if (target.dataset.action === "decrement") {
    counterValue -= 1;
    alert("Значення зменшено на 1");
  }

  if (target.dataset.action === "increment") {
    counterValue += 1;
    alert("Значення збільшено на 1");
  }

  document.querySelector("#value").textContent = counterValue;
});
