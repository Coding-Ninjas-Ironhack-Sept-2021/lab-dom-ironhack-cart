// ITERATION 1

function updateSubtotal(productRow) {

  // get references to elements in the dom
  const priceElm = productRow.querySelector(".price span");
  const quantityElm = productRow.querySelector(".quantity input");
  const subtotalElm = productRow.querySelector(".subtotal span");

  // calculate
  const price = parseFloat(priceElm.innerHTML);
  const quantity = parseFloat(quantityElm.value);
  const subtotal = price * quantity;
  
  // update dom
  subtotalElm.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {

  let totalPrice = 0;

  const productList = document.querySelectorAll(".product");
  productList.forEach(function(element){
    const subtotalForThisProduct = updateSubtotal(element); 
    totalPrice += subtotalForThisProduct;
  });

  const totalElm = document.querySelector("#total-value span");
  totalElm.innerHTML = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll );
  //... your code goes here
});
