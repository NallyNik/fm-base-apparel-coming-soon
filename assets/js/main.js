const btn = document.getElementById('submit');
const email = document.querySelector('input')


email.addEventListener("input", () => {
    email.setCustomValidity("");
    email.checkValidity();
});

email.addEventListener("invalid", () => {
    email.setCustomValidity("example@email.com");
});

btn.addEventListener("click", ()  => {
    if (!email.value) {
      email.setAttribute("required", true);
    }
});
