let notes = JSON.parse(localStorage.getItem('notes')) || [];
// const seats = [];
if (notes.length === 0) {
    for (let i = 0; i < 300; i++) {
        notes.push({title: '', description: '', date:'',endDate:'',category:'',reminder:false });
    }
}

let showNote = document.querySelector("#showNote");
let urgentArr = JSON.parse(localStorage.getItem("urgentArr")) || [];
let strategyArr = JSON.parse(localStorage.getItem("strategyArr")) || [];
let wellbeingArr = JSON.parse(localStorage.getItem("wellbeingArr")) || [];
let dailyArr = JSON.parse(localStorage.getItem("dailyArr")) || [];

let mainPage = document.querySelector('#mainPage');
let addNote= document.querySelector("#addNote");
let openTaskForm = document.querySelector("#openTaskForm");
let mainBody = document.getElementById("mainBody");
let cross = document.querySelector("#cross");
let getDate = document.querySelector("#getDate");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let deadLine = document.getElementById("deadLine");
let urgent = document.getElementById("urgent");
let wellbeing = document.getElementById("wellbeing");
let strategy = document.getElementById("strategy");
let daily = document.getElementById("daily");
let addingNote = document.querySelector("#addingNote");
let click = false;

let noteNum =JSON.parse(localStorage.getItem('noteNum')) ||   0;

// async function dateData(){
//     let data = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
//     let record = await data.json();
//     let arr = record.datetime.split("T");
//     getDate.innerText=arr[0];
// }

addNote.addEventListener('click',()=>{
    if(click == false){
        // dateData();
        let today = new Date();
        getDate.innerText = today.toDateString();
        mainBody.classList.add("main-body-after");
        openTaskForm.classList.remove("hidden");
        click=true;
    }
    else{
        mainBody.classList.remove("main-body-after");
        openTaskForm.classList.add("hidden");
        click=false;
    }
    
})

cross.addEventListener('click',()=>{
    mainBody.classList.remove("main-body-after");
    openTaskForm.classList.add("hidden");
})

function saveNote(noteTitle,noteDesc,noteEndDate,noteDate,noteCategory){
    notes[noteNum].title = noteTitle;
    notes[noteNum].description = noteDesc;
    notes[noteNum].endDate = noteEndDate;
    notes[noteNum].date = noteDate;
    notes[noteNum].category = noteCategory;

    let noteAdded = document.getElementById("noteAdded");
    noteAdded.classList.remove("hidden");
    mainBody.classList.remove("main-body-after");
    openTaskForm.classList.add("hidden");

    setTimeout(()=>{
        noteAdded.classList.add("hidden");
    },1000)
    noteNum++;
    localStorage.setItem("noteNum",JSON.stringify(noteNum));
}

function renderingNotes(){  
    let end = deadLine.value.split("T");
    let category;
    if(urgent.checked){
        category = "urgent";
    }
    else if(strategy.checked){
        category = "strategy";
    }
    else if(wellbeing.checked){
        category = "wellbeing";
    }
    else if(daily.checked){
        category = "daily";
    }
    else{
        category = "daily";
    }
    let noteTitle = title.value;
    let noteDesc = desc.value;
    let noteEndDate = end[0];
    let noteDate = getDate.innerText;
    let noteCategory = category;

    if((noteTitle == "") && (noteDesc == "")){
        alert("Please add the Title and Description of your note.");
    }
    else if((noteTitle == "") && (noteDesc != "")){
        alert("Please add the Title of your note.");
    }
    else if((noteTitle != "") && (noteDesc == "")){
        alert("Please add the Description of your note.");
    }
    else{
        saveNote(noteTitle,noteDesc,noteEndDate,noteDate,noteCategory );
    }
}
  
addingNote.addEventListener('click',()=>{
    renderingNotes();
    localStorage.setItem("notes",JSON.stringify(notes));
    // console.log(notes);
}) 




