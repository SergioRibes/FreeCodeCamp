const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
    if (input === '') {
        alert('Please provide a phone number');
        return;
    }
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    return `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`;
};

const displayResult = (message) => {
    resultsDiv.textContent = message;
};

checkBtn.addEventListener('click', () => {
    const resultMessage = checkValidNumber(userInput.value);
    if (resultMessage) {
        displayResult(resultMessage);
    }
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const resultMessage = checkValidNumber(userInput.value);
        if (resultMessage) {
            displayResult(resultMessage);
        }
        userInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    userInput.value = '';
});
