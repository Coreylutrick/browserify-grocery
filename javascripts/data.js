let departments = [];
let items = [];

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

module.exports =
{
  getDepartments,
  setDepartments,
  getItems,
  setItems,
  getItemsByDepartment,
};
