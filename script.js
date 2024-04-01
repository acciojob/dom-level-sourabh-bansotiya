//your JS code here. If required.
// Get the target element by its id
const targetElement = document.getElementById('level');

// Function to find the DOM level of an element
function findDOMLevel(element) {
  let level = 0;
  let currentElement = element;

  // Traverse up through the parent elements until reaching the root html element
  while (currentElement !== document.documentElement) {
    currentElement = currentElement.parentNode;
    level++;
  }

  // Add 1 to include the root html element itself
  return level + 1;
}

// Call the function and display the result using alert
const domLevel = findDOMLevel(targetElement);
alert(`The level of the element is: ${domLevel}`);

