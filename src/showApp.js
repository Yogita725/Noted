let notes = JSON.parse(localStorage.getItem('notes')) || [];
let currentDate = document.getElementById("currentDate");
let today= new Date();
currentDate.innerText = today.toDateString() ;
let pastDate, past;
let pastDateArr = [];
pastDateArr.push(today.toDateString());

for(let i=1;i<=7;i++){
    past = new Date(today.getTime() - i *24*60*60*1000 ) ;
    pastDate = past.toDateString();
    pastDateArr.push(pastDate);
}

console.log(pastDateArr);

// if(notes.length > 0){

// }






