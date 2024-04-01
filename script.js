//your JS code here. If required.
function cntLevel() {
    const level = document.getElementById('level');
    let count = 0;
    
    // Loop through parent elements until reaching the root <html> element
    while (level.parentElement) {
        level = level.parentElement;
        count++;
    }
    
    alert("The level of the element is: " + count);
}

// Call the function when the page is loaded
window.onload = cntLevel;

