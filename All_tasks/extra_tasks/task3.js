// 1) const btn = document.getElementById("my-btn");
// btn.addEventListener("click", function(){
//     console.log("Button is Clicked!");
// });

// 2) const b = document.getElementById("box");

// b.addEventListener("mousemove", function(e){
//     console.log(`X: ${e.clientX} + ${e.clientY}`)
// })

// 3) const link = document.getElementById("dangerLink");
// const msg = document.getElementById("newMsg");

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log("Navigation failed!");
//     msg.innerText="You are safe!";
// });

// 4) const list = document.getElementById("lst");
// const addbtn = document.getElementById("but");

// list.addEventListener('click', function(e){
//     if (e.target.tagName === "LI"){
//         console.log("You clicked: ", e.target.innerText);

//     e.target.style.textDecoration = "line-through";
//     e.target.style.color = "red";
//     }
// });

// addbtn.addEventListener('click', function(){
//     const newItem = document.createElement("li");
//     newItem.innerText = "New Task " + (Math.random() * 100).toFixed(0);

//     list.appendChild(newItem);
// });

const grid = document.getElementById("mainBox");

let currentTurn = "X";

grid.addEventListener("click", function(e){
    if (e.target.classList.contains("box")){
        if (e.target.innerText === ""){
            e.target.innerText = currentTurn;

            if (currentTurn === "X"){
                e.target.style.backgroundColor = "ffcccc";
            } else{
                e.target.style.backgroundColor = "#ccffcc"
            }

            if (currentTurn = "X") {
                currentTurn = "O";
            } else {
                currentTurn = "X"; 
            }

            console.log("Next Turn: ", currentTurn);
        }
    }
})