// document.getElementById("count-p").innerText=5

// let count=5
// //count=count+1
// console.log(count)

// function increment(){
//     console.log("Button was created!")
// }

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)

// }

// countdown()
// countdown()

// function myLogger(){
//     console.log(42)
// }

// myLogger()

// let lap1=5
// let lap2=4
// let lap3=3
// function lap(){
// let lap4=lap1+lap2+lap3
// console.log(lap4)
// }
// lap()

// let lapsCompleted=0

// function incrementLaps(){
//    lapsCompleted=lapsCompleted+1
    
// }
// incrementLaps()
// incrementLaps()
// incrementLaps()

// console.log(lapsCompleted)
let countEl=document.getElementById("count")
let saveEl=document.getElementById("save-el")
let count=0

console.log(saveEl)

function increment(){
    count += 1
    countEl.textContent=count
    
}

function save(){
    let countStr = count+ "-"
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
  //  console.log(count)

}
//save()

// let message="You have tree new notifications"
// console.log(message)