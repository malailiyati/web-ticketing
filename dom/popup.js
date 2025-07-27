const overlay = document.getElementById("payment");
const openBtn = document.getElementById("openPopUp");
const closeBtn = document.getElementById("closePopUp");

openBtn.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});
