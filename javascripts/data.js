let departments = [];
let items = [];
const cart = [];

const getDepartments = () =>
{
  return departments;
};

const setDepartments = (depArray) =>
{
  departments = depArray;
};

const setItems = (itemsArray) =>
{
  items = itemsArray;
};

const getItems = () =>
{
  return items;
};

const getItemsByDepartment = (departmentId) =>
{
  const selectedItems = [];
  items.forEach((item) =>
  {
    if (item.departmentId === departmentId)
    {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const setCart = (itemId, numberToAdd) =>
{
  const itemPosition = items.map(function (item)
  {
    return item.id;
  }).indexOf(itemId);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  cart.push(newItem);
  console.log(cart);
};

const getCart = () =>
{
  return cart;
};

module.exports =
{
  getDepartments,
  setDepartments,
  getItems,
  setItems,
  getItemsByDepartment,
  setCart,
  getCart,
};
