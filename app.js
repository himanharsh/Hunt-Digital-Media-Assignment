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

 const sDate = document.getElementById('sDate');
 const eDate = document.getElementById('eDate');

 function minDate(){
   const selectedSDate = sDate.value;
   eDate.min = selectedSDate;
 }

 sDate.addEventListener('change', minDate);




