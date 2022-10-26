// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');
  //console.log(price, quantity);
  const calculatedSubTotal = Number(price) * Number(quantity);
  //console.log(calculatedSubTotal);
  subTotal.innerText = calculatedSubTotal;
  return calculatedSubTotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');
  //console.log(multipleProducts);
  let totalPrice = 0;
  for (let i = 0; i < multipleProducts.length; i++) {
    totalPrice += updateSubtotal(multipleProducts[i]);
  }

  // ITERATION 3
  const calculatetotal = document.querySelector('#total-value span');
  calculatetotal.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  //console.log('dentro da função createPrduct');
  //... your code goes here,
  const target = document.querySelector('.create-product');
  //console.log(target);
  const inputName = target.querySelector('.newProductName');
  const inputPrice = target.querySelector('.newProductPrice');
  console.log(inputName.value, inputPrice.value);
  const newElement = document.createElement('tr');
  newElement.className = 'product';
  newElement.innerHTML = `<td class="name">
            <span>${inputName.value}</span>
          </td>
          <td class="price">$<span>${inputPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;
  const tBody = document.querySelector('tbody');
  tBody.appendChild(newElement);

  inputName.value = '';
  inputPrice.value = 0;

  const removebtns = document.querySelector('.btn-remove');
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', (e) => removeProduct(e));
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createwProduct = document.querySelector('#create');
  createwProduct.addEventListener('click', createProduct);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', (e) => removeProduct(e));
  }
});
