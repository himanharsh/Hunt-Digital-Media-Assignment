let id = 2;

function addNew() {
    let table = document.getElementById("table");
    let row = table.insertRow(1);
 
    for (let i = 0; i<10; i++){
        let cData = row.insertCell(i)
        if (i == 1){
            cData.innerText = id
            id++
        }
    }
 }





