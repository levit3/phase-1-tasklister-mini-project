document.addEventListener("DOMContentLoaded", () => {
  const inputForm = document.querySelector("form");
  const input = document.querySelector("form #new-task-description");
  const selector = document.querySelector("#selector");

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const toDo = document.querySelector("div#list ul");
    const listValue = document.createElement("li");

    const p = document.createElement("p");
    p.textContent = `${input.value} `;
    console.log(selector.value);
    const button = document.createElement("button");
    button.textContent = "x";
    switch (selector.value) {
      case "highPriority":
        p.style.color = "red";
        break;
      case "mediumPriority":
        p.style.color = "orange";
        break;
      case "lowPriority":
        p.style.color = "green";
        break;
    }

    p.appendChild(button);
    listValue.appendChild(p);
    toDo.appendChild(listValue);
    inputForm.reset();
    button.addEventListener("click", () => {
      listValue.remove();
    });
  });
});
