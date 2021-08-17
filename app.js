function updateProductNumber(product,price,isplus) {
    const inputProduct = document.getElementById(product+'-number');
    const inputQty = parseInt(inputProduct.value);
    if (isplus) {
        inputProduct.value = inputQty + 1;
    } else if(inputQty > 0) {
        inputProduct.value = inputQty - 1;
    }
    // update case total
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = inputProduct.value * price;
    calculationTotal();
}
//getInputValue
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// total calulation
function calculationTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText= taxAmount;
    document.getElementById('total-price').innerText= totalPrice;

}
// case increment
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case',59,true);
});
// case decrement
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',59,false);
});
// phone inrement
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone',1219,true);
});
// phone decrement
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone',1219,false);
});

