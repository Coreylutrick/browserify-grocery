const loadDepartments = require('./departments');

const printToDom = require('./dom');

const depArray = [];

const whenDepsLoad = function ()
{
  const depArray = JSON.parse(this.responseText).departments;
  printToDom(depArray);
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
