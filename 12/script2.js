const calculatorForm = document.getElementById("calculator");
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const resultText = document.getElementById('result-text')

// calculatorForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const formData = new FormData(calculatorForm);

//     console.log(formData.get("num1"));
//     console.log(formData.get("num2"));


// })
function readForm(e) {
    e.preventDefault();
    const operation = e.target.id;
    const formData = new FormData(calculatorForm);

    const num1 = parseInt(formData.get("num1"));
    const num2 = parseInt(formData.get("num2"));

    let answer;

    if(operation === "multiply"){
        answer = num1 * num2;
    } else {
        answer = num1 / num2;
    }
    resultText.textContent = answer;
}

multiplyBtn.addEventListener("click", readForm);
divideBtn.addEventListener("click", readForm);
