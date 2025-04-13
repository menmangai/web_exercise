const temperatures = [55,62,68,74,59,45,41,58,60,67,65,78,82,88,91,92,90,93,87,80,78,79,72,68,61,59,55,65];
hc=0;
pc=0;
cc=0;

const fs = require('fs');

const htmlContent ='<!DOCTYPE HTML><html><head><script src="temp.js"></script></head><body><input type="button" value="Generate a table" onclick="generateTable()" /></body></html>';
fs.writeFileSync("output.html", htmlContent);

function generateTable() {
    document.writeln("<h1><u>Temperature Table</u></h1><br>");
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    for (let i = 0; i < temperatures.length; i++) {
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        const cell = document.createElement("td");
        if(j==0){
            const cellText = document.createTextNode(`${temperatures[i]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        if(j==1){
            if(temperatures[i]>85){
                const cellText = document.createTextNode(`Hot Days`);
                cell.appendChild(cellText);
                row.appendChild(cell);
                hc++;
            }else if(temperatures[i]>=60 && temperatures[i]<85){
                const cellText = document.createTextNode(`Pleasant Days`);
                cell.appendChild(cellText);
                row.appendChild(cell);
                pc++;
            }else{
                const cellText = document.createTextNode(`Cold Days`);
                cell.appendChild(cellText);
                row.appendChild(cell);
                cc++;
            }
        }
          
      }
  
      tblBody.appendChild(row);
    }
  
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");

    document.write("Summary :<br>");
    document.writeln('Hot Days : ',hc,"<br>");
    document.writeln('Pleasant Days : ',pc,"<br>");
    document.writeln('Cold Days : ',cc,"<br>");
}
