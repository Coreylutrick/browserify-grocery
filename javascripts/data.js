const loadDepartments = require('./departments');

const whenDepsLoad = function ()
{
  const data = JSON.parse(this.responseText).departments;
  console.log(data);
};

const badDeps = function ()
{
  console.error('it broke');
};

const initializer = () =>
{
  loadDepartments(whenDepsLoad, badDeps);
};

module.exports =
{
  initializer,
};
