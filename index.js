// document.getElementById("count-el").innerText=5

// let count = 0
// console.log(count)
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
// console.log(saveEl)
function increment() {
    count +=1
    countEl.textContent = count
    // console.log("The button was clicked")
}
function save()
{
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
    // console.log(count)
}

// let username = "per"
// let message = "You have tree new notification"
// console.log(message + ", " + username + "!")