console.log("Connected");

let inputMovie = document.getElementById("inputMovie");
console.log(inputMovie.value)
let buttonSearch = document.getElementById("myBtn");
let result = document.getElementById("result");


let moviesArr = ["John Wick", "One Shot","Terminator","Warath of Man","Jason Bourne"]



function searchMovie(array , userchoose){
    for(let i = 0 ; i<array.length;i++){
        if(array[i].toLowerCase()=== userchoose){
            return (result.innerHTML = ` <h1 style ="color : blue"> This movie can be rented</h1>`)

        }
    }
    return(result.innerHTML = `<h1 style ="color:green">This movie cant be rented</h1>`)
}


buttonSearch.addEventListener("click",function(){
    searchMovie(moviesArr,inputMovie.value);
})



// --------------------------------------------------------------------------------------

// Homework 2 



let title = document.getElementById("title");
let priority = document.getElementById("priority");
let colorChoose = document.getElementById("color");
let textarea = document.getElementById("textarea");

let addButton = document.getElementById("addreminder");

let showButton = document.getElementById("showreminder");

let resultTable = document.getElementById("resultTable");


function notePad(title,priority,color,description){
    this.title = title,
    this.priority =priority,
    this.color = color,
    this.description = description
}

let reminderArr = [];

function addResultate(list,element){
    element.innerHTML = "";
    for(let i = 0 ; i<list.length; i++){
        element.innerHTML += `
        <tr>
            <td style="color : ${list[i].color};">${list[i].title}</td>
            <td>${list[i].priority}</td>
            <td>${list[i].description}</td>
        </tr>
        `
    }
}

addButton.addEventListener("click",function () {
    if(title.value !== "" || priority.value !== "" ||colorChoose.value !== "" || textarea.value !== "" ){
        let note = new notePad(title.value, priority.value, colorChoose.value, textarea.value);
        reminderArr.push(notePad);
        console.log(reminderArr);
    }
    title.value = "";
    priority.value = "";
    textarea.value = "";
})


showButton.addEventListener("click",function (){
    addResultate(reminderArr,resultTable)
})