let count = 0;
const countEl = document.getElementById("count");

function render() {
  countEl.textContent = count;
}

document.getElementById("increment").addEventListener("click", () => {
  count += 1;
  render();
});

document.getElementById("decrement").addEventListener("click", () => {
  count -= 1;
  render();
});
