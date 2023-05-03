const myForm = document.getElementById('form')

function myFunction(num1, num2) {
    if(num1 === num2) return (num1 + num2) * 3;
    else return num1 + num2;
}

myForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const myFormData = new FormData(myForm)
    console.log(myFormData.get('num1'));
    console.log(myFormData.get('num2'));

})