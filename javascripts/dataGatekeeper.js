const loadDepartments = require('./departments');

const printDepartmentToDom = require('./departmentdom');

const depArray = [];

const whenDepsLoad = function ()
{
  const depArray = JSON.parse(this.responseText).departments;
  printDepartmentToDom(depArray);
};

const badDeps = function ()
{
  console.error('it broke');
};

const initializer = () =>
{
  loadDepartments(whenDepsLoad, badDeps);
};

const getDeps = () =>
{
  return depArray;
};

module.exports =
{
  initializer,
  getDeps,
};
