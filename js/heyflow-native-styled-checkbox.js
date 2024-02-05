// Get the elements
const defaultCheckbox = document.getElementById("default-checkbox");
const largeCheckbox = document.getElementById("large-checkbox");

// Introduce listner(s) for the on change event (JS handler for default and large checkbox)
// Handle the side-effect of changing status of the default checkbox
defaultCheckbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    largeCheckbox.checked = true;
  } else {
    largeCheckbox.checked = false;
  }
});

// Handle the side-effect of changing status of the large checkbox
largeCheckbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    defaultCheckbox.checked = true;
  } else {
    defaultCheckbox.checked = false;
  }
});