// Funkce na kontrolu hesla
function checkPasswords() {
  const pass1 = document.getElementById("pass1");
  const pass2 = document.getElementById("pass2");

  if (pass1.value === "" || pass2.value === "") {
    pass1.classList.remove("pass-error", "pass-success");
    pass2.classList.remove("pass-error", "pass-success");
    return;
  }

  if (pass1.value !== pass2.value) {
    pass1.classList.remove("pass-success");
    pass1.classList.add("pass-error");
    pass2.classList.remove("pass-success");
    pass2.classList.add("pass-error");
  } else {
    pass1.classList.remove("pass-error");
    pass1.classList.add("pass-success");
    pass2.classList.remove("pass-error");
    pass2.classList.add("pass-success");
  }
} 

// Zápis do stránky
document.getElementById("pass1").addEventListener("input", checkPasswords);
document.getElementById("pass2").addEventListener("input", checkPasswords);

// Validace při odeslání formuláře
document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const pwd = form.password.value;
  const pwd2 = form.password2.value;
  const msgBox = document.getElementById("message");

  // vyčisti stavové třídy
  msgBox.classList.remove("message-error", "message-repair", "message-success");

  if (pwd !== pwd2) {
    msgBox.textContent = "Hesla se neshodují!";
    msgBox.classList.add("message-error");
  } else if (pwd.length < 6) {
    msgBox.textContent = "Heslo musí mít alespoň 6 znaků!";
    msgBox.classList.add("message-repair");
  } else {
    msgBox.textContent = "Registrace proběhla úspěšně.";
    msgBox.classList.add("message-success");
  }
});
