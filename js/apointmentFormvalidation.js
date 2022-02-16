const submit = document.getElementById("submit");
submit.addEventListener('click', validate);
function validate(e) {
  e.preventDefault();
  const dateField = document.getElementById("date");
  let valid = true;
  if (!dateField.value) {
    const dateError = document.getElementById("dateError");
    dateError.classList.add("visible");
    dateField.classList.add("invalid");
    dateError.setAttribute('aria-hidden', false);
    dateError.setAttribute('aria-invalid', true);
  }
  return valid;
}
