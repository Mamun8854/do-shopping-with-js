const cartArray = [];
function display(cartProduct) {
  const tableBody = document.getElementById("cart-products");
  let totalPrice = 0;
  tableBody.innerHTML = "";
  for (let i = 0; i < cartProduct.length; i++) {
    const productName = cartArray[i].productName;
    const productPrice = cartArray[i].productPrice;
    // console.log(productPrice);
    totalPrice = totalPrice + productPrice;
    const tr = document.createElement("tr");
    tr.innerHTML = `
     <th style="zindex: 12!important;">${i + 1}</th>
     <td>${productName}</td>
     <td>${productPrice}</td>`;

    tableBody.appendChild(tr);
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <th></th>
  <td>Total Price</td>
  <td>${totalPrice}</td>`;
  tableBody.appendChild(tr);
}

function productBtn(element) {
  const productName = element.parentNode.parentNode.children[0].innerText;
  //   console.log(productName);
  const productPrice =
    element.parentNode.parentNode.children[1].children[0].innerText;
  //   console.log(productPrice);

  const productObject = {
    productName: productName,
    productPrice: parseFloat(productPrice),
  };
  cartArray.push(productObject);
  const cartLength = cartArray.length;
  document.getElementById("product-quantity").innerText = cartLength;

  display(cartArray);
}
