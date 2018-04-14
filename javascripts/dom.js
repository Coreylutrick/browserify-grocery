const outPutDiv = document.getElementById('departments');

const domString = (departments) =>
{
  let strang = '';
  departments.forEach((departments) =>
  {
    strang +=   `<div class='department col-sm-3'>`;
    strang +=     `<h3 class='hide'>${departments.name}</h3>`;
    strang +=     `<img class='dep-img' src='${departments.img}'>`;
    strang +=   `</div>`;
  });
  return strang;
};

const printToDom = (DepArray) =>
{
  outPutDiv.innerHTML = domString(DepArray);
};

module.exports = printToDom;
