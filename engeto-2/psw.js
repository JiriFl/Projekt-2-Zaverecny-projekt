//Funkce na kontrolu hesla
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
