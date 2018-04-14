const outPutDiv = document.getElementById('departments');

const events = require('./events');

const domString = (departments) =>
{
  let strang = '';
  departments.forEach((departments) =>
  {
    strang +=   `<div class='department col-sm-3'>`;
    strang +=     `<h3 class='hide department-title' data-department-id='${departments.id}'>${departments.name}</h3>`;
    strang +=     `<img class='dep-img' src='${departments.img}'>`;
    strang +=   `</div>`;
  });
  return strang;
};

const printToDom = (DepArray) =>
{
  outPutDiv.innerHTML = domString(DepArray);
  events.addDepartmentEvents();
};

module.exports = printToDom;
