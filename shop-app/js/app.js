/**
 * DOM
 */
let shoppingListContainer = document.querySelector("#shopping-list-container");
let btnAdd = document.querySelector("#btn-add");
let inputProduct = document.querySelector("#input-product");

/**
 * Array
 */
let shoppingList = ["Apple", "Banana", "Nutella"];
let cartList = ["Milk", "Bread"];

/**
 * Render Products
 */
function renderShoppingList() {
  shoppingListContainer.innerHTML = shoppingList
    .map((product, index) => {
      return `
        <li class="list-group-item">
          ${product}
          <i class="fas fa-plus-circle text-primary float-end"></i>
        </li>
      `;
    })
    .join("");
}

/**
 * Add Product
 */
 btnAdd.addEventListener("click", function () {
  let product = inputProduct.value;

  if (product.trim() !== "") {
    shoppingList.push(product);
    inputProduct.value = "";
    renderShoppingList();
  }
});

/**
 * Functions
 */
renderShoppingList();
