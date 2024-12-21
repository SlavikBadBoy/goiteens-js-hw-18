const list = document.querySelector("#categories");
const listItems = document.querySelectorAll("li.item");

console.log(`У списку ${list.children.length} категорії.`);

[...list.children].forEach((element) => {
  const title = element.querySelector("h2").textContent;

  const itemCount = element.querySelectorAll("li").length;

  console.log(`Категорія: ${title}, Кількість елементів: ${itemCount}`);
});
