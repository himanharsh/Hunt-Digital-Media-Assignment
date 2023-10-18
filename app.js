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
 const displayStartDate = document.getElementById('displayStartDate');
 const dateRangePicker = document.getElementById('dateRangePicker');

 let selectedDates = [];

 function updateSelectedDates() {
    const selectedOptions = dateRangePicker.selectedOptions;
    selectedDates = Array.from(selectedOptions).map(option => option.value);
  }

 function minDate(){
   const selectedSDate = sDate.value;
   eDate.min = selectedSDate;
   dateRangePicker.min = selectedSDate;
   updateSelectedDates();
 }

 function maxDate(){
    const selectedEDate = eDate.value;
    dateRangePicker.max = selectedEDate;
    updateSelectedDates();
 }

 sDate.addEventListener('change', minDate);
 eDate.addEventListener('change', maxDate);

 function monthYear(){
    const selectedStartDate = new Date(sDate.value);

    const month = selectedStartDate.getMonth();
    const year = selectedStartDate.getFullYear();

    displayStartDate.textContent = `${month+1}, ${year}`;
 }

 sDate.addEventListener('change',monthYear);

 dateRangePicker.addEventListener('change', function() {
    updateSelectedDates();
  });

console.log(selectedDates.size);


