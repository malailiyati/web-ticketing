//mengakses elemen
const profilePic = document.querySelector(".profilePict");
const dropdown = document.querySelector(".buttonNav");
const logoutBtn = document.querySelector(".logout");

function hamburgerIcon() {
  const nav = document.querySelector(".allnavbar");
  document.querySelector(".hamburger-icon").onclick = () => {
    nav.classList.toggle("active");
  };
}
hamburgerIcon();
function hamburgerIconLogin() {
  const navbarLogin = document.querySelector(".allnavbarLogin");
  document.querySelector(".hamburger-login").onclick = () => {
    navbarLogin.classList.toggle("active");
  };
}
hamburgerIconLogin();

const user = JSON.parse(localStorage.getItem("userLogin"));

if (user) {
  document.querySelector(".default").style.display = "none";
  document.querySelector(".afterLogin").style.display = "flex";

  // saat klik foto
  profilePic.addEventListener("click", () => {
    dropdown.style.display =
      dropdown.style.display === "none" ? "block" : "none";
  });

  // logout
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userLogin");
    window.location.href = "../home/home.html";
  });
} else {
  document.querySelector(".default").style.display = "flex";
  document.querySelector(".afterLogin").style.display = "none";
}
