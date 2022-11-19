import "./styles.css";

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const ele = document.querySelector(".element");

btn.addEventListener("click", (e) => {
  const el = document.createElement("textarea");
  el.value = "foo";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  const h1 = document.createElement("h1");
  h1.textContent = "Copied Content";

  const text = document.createElement("p");

  output.appendChild(h1);
});
