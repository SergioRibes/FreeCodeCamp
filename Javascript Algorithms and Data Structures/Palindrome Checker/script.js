const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {

    const textInputValue = textInput.value;
    const cleanedText = textInputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (cleanedText.trim() === "") {
        alert('Please input a value');
    } else if (cleanedText.length === 1 || cleanedText === cleanedText.split("").reverse().join("")) {
        result.textContent = `${textInputValue} is a palindrome`;
    } else {
        result.textContent = `${textInputValue} is not a palindrome`;
    }
})