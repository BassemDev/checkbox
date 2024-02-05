// Get the elements
const styledCheckbox = document.getElementById("styled-Checkbox");

// Introduce lister for the on change event (JS handler for default and large)
// Handle the side-effect of changing status of the styled checkbox
styledCheckbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    defaultCheckbox.checked = true;
  } else {
    defaultCheckbox.checked = false;
  }
});