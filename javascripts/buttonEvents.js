const goToDepartments = document.getElementById('go-to-departments');
const departmentsDiv = document.getElementById('departments');
const itemsDiv = document.getElementById('items');
const cartDiv = document.getElementById('cart');
const data = require('./dataGatekeeper');
const goToCart = document.getElementById('go-to-cart');

const cartButton = () =>
{
  goToCart.addEventListener('click', () =>
  {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
  });
};

const departmentsButton = () =>
{
  goToDepartments.addEventListener('click', () =>
  {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    data.initializer();
  });
};

module.exports =
{
  departmentsButton,
  cartButton,
};
