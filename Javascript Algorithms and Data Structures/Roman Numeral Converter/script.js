const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumbers = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
];

const numberToRoman = (number) => {
    let conversion = "";

    for (const [roman, value] of romanNumbers) {
        while (number >= value) {
            conversion += roman;
            number -= value;
        }
    }
    return conversion;
}

convertBtn.addEventListener("click", () => {
    const inputValue = input.value.trim();
    if (inputValue.length === 0) {
        output.textContent = "Please enter a valid number";
    } else if (inputValue < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (inputValue > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = numberToRoman(inputValue);
    }
}
)