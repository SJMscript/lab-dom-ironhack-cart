// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
//* 1
  //... your code goes here
  let priceDOM = product.querySelector(".price span")
  let quantityDOM = product.querySelector(".quantity input")
//* 2
  let priceValue = priceDOM.innerText;
  let numQua = quantityDOM.value;
//* 3
  let subtotalPrice = priceValue * numQua;
//* 4
  let subtotalValue = product.querySelector(".subtotal span");
//* 5

    subtotalValue.innerHTML = subtotalPrice;
    return subtotalPrice
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let someProducts = document.querySelectorAll(".product")
  let totalPrice = 0;

  someProducts.forEach((eachProduct) => {
    let subtotal = updateSubtotal(eachProduct);
    totalPrice += subtotal
  })

  // ITERATION 3
  //... your code goes here
  let finalPrice = document.querySelector("#total-value span")
  finalPrice.innerHTML = totalPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeProductBtn = document.querySelectorAll(".btn btn-remove");
  removeProductBtn.addEventListener('click', removeProduct);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
