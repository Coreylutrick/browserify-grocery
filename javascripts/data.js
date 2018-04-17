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

module.exports =
{
  getDepartments,
  setDepartments,
  getItems,
  setItems,
};
