const addClassButton = document.getElementById("addClassButton");
const table = document.getElementById("classTable");
var numberOfRows = 0;

function addClass() {
    var row = table.insertRow(numberofRows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    numberOfRows++;
}

addClassButton.onclick = addClass;