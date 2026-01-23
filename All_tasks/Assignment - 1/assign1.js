let input = prompt("Enter a Number: ");

let num = Number(input);

if(num>0){
    console.log("The given number is positive.")
    alert("The given number is positive.")
} else if(num<0){
    console.log("The given number is negative.")
    alert("The given number is negative.")
} else{
    console.log("The given number is zero.")
    alert("The given number is zero.")
}
