// Get the elements
const styledCheckbox = document.getElementById("styled-Checkbox");

// Introduce listner(s) for the on change event (JS handler for styled checkbox)
// Handle the side-effect of changing status (checked/unchecked) of the styled checkbox
styledCheckbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    defaultCheckbox.checked = true;
  } else {
    defaultCheckbox.checked = false;
  }
});