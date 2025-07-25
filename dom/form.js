//mengakses elemen
const form = document.querySelector("form");
const email = form.querySelector("#email");
const password = form.querySelector("#pwd");
const submit = form.querySelector("#submitBtn");

const emailGroup = form.querySelector(".inputEmail");
const passwordGroup = form.querySelector(".pass");

//fungsi menampilkan pesan error
function validation(container, error) {
  const err = document.createElement("div");
  err.classList.add("errorText");
  err.textContent = error;
  container.appendChild(err);
}

submit.addEventListener("click", function (event) {
  event.preventDefault(); //cegah form submit secara default

  const allErr = document.querySelectorAll(".errorText");
  allErr.forEach((el) => el.remove()); //hapus semua validasi sebelumnya

  //hilangkan spasi diawal dan akhir input
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  let isValid = true;

  //validasi email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    validation(emailGroup, "Email tidak boleh kosong");
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    validation(emailGroup, "Format email tidak valid");
    isValid = false;
  }

  //validasi password
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  if (passwordValue === "") {
    validation(passwordGroup, "password tidak boleh kosong");
    isValid = false;
  } else if (!passwordPattern.test(passwordValue)) {
    validation(
      passwordGroup,
      "password minimal 8 karakter,mengandung minimal 1 huruf besar, 1 huruf kecil dan 1 karakter spesial(!@#$%^&*><"
    );
    isValid = false;
  }

  //jika valid console ke terminal
  if (isValid) {
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);

    const user = {
      email: emailValue,
      password: passwordValue,
    };

    //simpan data ke localStorage
    localStorage.setItem("userLogin", JSON.stringify(user));
    //kehalaman home
    window.location.href = "../home/home.html";
  }
});
