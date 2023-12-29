"use strict";

const urlParams = new URLSearchParams(window.location.search);
const columnA = urlParams.get("columnA") || "textA";
const columnB = urlParams.get("columnB") || "textB";
const textA = urlParams.get("textA") || "";
const textB = urlParams.get("textB") || "";

function initInputTable() {
  document.getElementById("inputTextA").value = textA;
  document.getElementById("inputTextB").value = textB;
  document.getElementById("colAText").value = columnA;
  document.getElementById("colBText").value = columnB;
}

function updateDiffTable() {
  const inputTextA = document.getElementById("inputTextA").value;
  const inputTextB = document.getElementById("inputTextB").value;
  const colAText = document.getElementById("colAText").value;
  const colBText = document.getElementById("colBText").value;

  compareStrings(inputTextA, inputTextB, colAText, colBText);
}

function compareStrings(str1, str2, colA, colB) {
  document.getElementById("diffColA").innerHTML = colA;
  document.getElementById("diffColB").innerHTML = colB;

  const diffTable = document.getElementById("diffContainer");

  // diffResult += `<tr>
  //                 <th style="width: 5%;"></th>
  //                 <th style="width: 45%;">${colA}</th>
  //                 <th style="width: 45%;">${colB}</th>
  //                 <th style="width: 5%;">Diff</th>

  //                 </tr>`;

	// var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

	// // Insert a row at the end of table
	// var newRow = tbodyRef.insertRow();
	
	// // Insert a cell at the end of the row
	// var newCell = newRow.insertCell();
	
	// // Append a text node to the cell
	// var newText = document.createTextNode('new row');
	// newCell.appendChild(newText);
	const tbodyRef = diffTable.getElementsByTagName('tbody');
	 

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    const char1 = str1[i] || "";
    const char2 = str2[i] || "";

    let diffClass = "";
    if (char1 !== char2) {
      diffClass = "diff";
    }
    const diffContent = char1 === char2 ? "" : `&#10060`;

    const diffResult = `
			<tr class="${diffClass}">
      	<td>${i + 1}</td>
        <td>${char1}</td>
        <td>${char2}</td>
        <td>${diffContent}</td>
    	</tr>
		`;
			
		var newNode = document.createElement(diffResult);
    diffTable.appendChild(newNode);
  }

  //.innerHTML = diffResult;
}

initInputTable();
compareStrings(textA, textB, columnA, columnB);
