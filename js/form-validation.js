const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value.trim();
  const agree = document.getElementById("agree").checked;
  const contactType = document.querySelector('input[name="contactType"]:checked');

  if (name === "") {
    formMessage.textContent = "Please enter your name.";
    return;
  }

  if (email === "" || !email.includes("@")) {
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  if (topic === "") {
    formMessage.textContent = "Please choose a topic.";
    return;
  }

  if (!contactType) {
    formMessage.textContent = "Please choose a preferred contact method.";
    return;
  }

  if (message === "") {
    formMessage.textContent = "Please enter your message.";
    return;
  }

  if (!agree) {
    formMessage.textContent = "You must agree with the terms.";
    return;
  }

  formMessage.textContent = "Form submitted successfully.";
  form.reset();
});