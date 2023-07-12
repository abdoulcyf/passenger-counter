//document.getElementById("count-el").innerText = 5;


// let countEl = document.getElementById("count-el")

// console.log("countEL")

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count

// }


let SaveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")

console.log(SaveEl)

count = 0

function increment(){
    count += 1
    countEL.textContent = count
    
}

// let countSave = document.getElementById("save-btn")
// console.log(countSave)

// function save(){
//     countSave.innerText = save
// }

function save(){
let countStr = count + " - "

SaveEl.textContent += countStr
console.log(count)
countEL.textContent = 0
count = 0

}


