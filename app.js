let paymentForm = document.querySelector('#paymentForm');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let allOk = true;

    const form = e.target;

    let creditCardNumber = /^[0-9]{13,16}$/;
    let cvcN = /^[0-9]{3}$/;
    let soloNumeros = /^[0-9]+$/;
    let soloLetras = /^[a-zA-Z]+$/;

    if (form.card.value === "" || !creditCardNumber.test(form.card.value)) {
        colorRojo(form.card);
        allOk = false;
    }
    if (form.cvc.value === "" || !cvcN.test(form.cvc.value)) {
        colorRojo(form.cvc);
        allOk = false;
    }
    if (form.amount.value === "" || !soloNumeros.test(form.amount.value)) {
        colorRojo(form.amount);
        allOk = false;
    }
    if (form.firstName.value === "" || !soloLetras.test(form.firstName.value)) {
        colorRojo(form.firstName);
        allOk = false;
    }
    if (form.lastName.value === "" || !soloLetras.test(form.lastName.value)) {
        colorRojo(form.lastName);
        allOk = false;
    }
    if (form.city.value === "" || !soloLetras.test(form.lastName.value)) {
        colorRojo(form.city);
        allOk = false;
    }
    if (form.stateTree.value === "") {
        colorRojo(form.stateTree);
        allOk = false;
    }
    if (form.postalCode.value === "" || !soloNumeros.test(form.postalCode.value)) {
        colorRojo(form.postalCode);
        allOk = false;
    }
    if (form.textArea.value === "" || !checkCVC.test(form.textArea.value)) {
        colorRojo(form.textArea);
        allOk = false;
    }

    if (allOk) {
        form.submit()
    } else {
        document.getElementById("errorAlert").classList.remove("d-none");
    }

});

paymentForm.addEventListener('reset', (e) => {
   
resetear(e);

})

function colorDefault(inputSelecter) {
    inputSelecter.style.background = "#FFFFFF";
}
function colorRojo(inputSelecter) {
    inputSelecter.style.background = "#F8D7DA";
}

let cvc = document.querySelector("#cvc");
cvc.addEventListener("keyup", (e) =>{
    if (e.target.value>999){
        cvc.value = e.target.value.slice(0, 3);
    }
})

function resetear(e){
    const form = e.target;
    document.getElementById("errorAlert").classList.add("d-none");

    if (form.card.value === "") {
        colorDefault(form.card);
    }
    if (form.cvc.value === "") {
        colorDefault(form.cvc);
    }
    if (form.amount.value === "") {
        colorDefault(form.amount);
    }
    if (form.firstName.value === "") {
        colorDefault(form.firstName);
    }
    if (form.lastName.value === "") {
        colorDefault(form.lastName);
    }
    if (form.city.value === "") { //PENDIENTE
        colorDefault(form.city);
    }
    if (form.stateTree.value === "") { //PENDIENTE
        colorDefault(form.stateTree);
    }
    if (form.postalCode.value === "") {
        colorDefault(form.postalCode);
    }
    if (form.textArea.value === "") {
        colorDefault(form.textArea);
    }
}
