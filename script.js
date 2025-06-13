const form = document.getElementById("regForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    message.textContent = "Некорректный email!";
    message.style.color = "red";
    return;
  }

  if (password.value.length < 6) {
    message.textContent = "Пароль слишком короткий!";
    message.style.color = "red";
    return;
  }

  if (password.value !== confirmPassword.value) {
    message.textContent = "Пароли не совпадают!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Регистрация успешна!";
  message.style.color = "green";
  form.reset();
});