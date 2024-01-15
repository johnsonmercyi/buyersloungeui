import { response } from '../util/utils.mjs';

document.addEventListener("DOMContentLoaded", function(event) {
  const tBody = document.querySelector("#tBody");

  response.forEach(row => {
    tBody.appendChild(renderRow(row));
  });

  function renderRow(rowData) {
    const row = document.createElement('tr');

    const nameCol = document.createElement('td');
    const ageCol = document.createElement('td');
    const addressCol = document.createElement('td');

    nameCol.textContent = rowData.name;
    ageCol.textContent = rowData.age;
    addressCol.textContent = rowData.address;

    row.appendChild(nameCol);
    row.appendChild(ageCol);
    row.appendChild(addressCol);

    return row;
  }
  
});