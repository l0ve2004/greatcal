// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Event listener to capture keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Check if the key pressed is a number, operator, or special key
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        event.preventDefault(); // Prevent default behavior (e.g., typing in input fields)
        appendToDisplay(key); // Append the key to the display
    } else if (key === 'Enter') {
        event.preventDefault(); // Prevent default behavior (e.g., form submission)
        calculate(); // Perform calculation
    } else if (key === 'Escape' || key === 'Delete') {
        clearDisplay(); // Clear the display
        event.preventDefault(); // Prevent default behavior (e.g., navigating back)
    }
});
