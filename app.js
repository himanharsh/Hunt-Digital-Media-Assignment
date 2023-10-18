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

 const startDatePicker = document.getElementById('sDate');
 const displayStartDate = document.getElementById('displayStartDate');

 function monthYear(){
    const selectedStartDate = new Date(startDatePicker.value);

    const month = selectedStartDate.getMonth();
    const year = selectedStartDate.getFullYear();

    displayStartDate.textContent = `${month+1}, ${year}`;
 }
 startDatePicker.addEventListener('change',monthYear);




