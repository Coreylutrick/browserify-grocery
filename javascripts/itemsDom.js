const itemsOutputDiv = document.getElementById('items');

const itemsDomString = (items) =>
{
  let domString = '';
  items.forEach((items) =>
  {
    domString = `<h3>${items.name}</h3>`;
  });
  return domString;
};

const printToDom = (items) =>
{
  itemsOutputDiv.innerHTML = itemsDomString(items);
};

module.exports = printToDom;
