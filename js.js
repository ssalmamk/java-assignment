//1.
function exchange(egpAmount){
const exchangerate =51.1;
const usdamount =egpAmount/exchangerate;
return Number(usdamount.toFixed(2));

}
console.log(exchange(2000));
console.log(exchange(340));

//2.
let firstName = prompt("Enter your first name:"); //enter ur name
let birthYear = prompt("Enter your birth year:"); 
let mobile = prompt("Enter your mobile number:");
let color = prompt("Choose a color (red, green, blue):");

let currentYear = new Date().getFullYear(); //todays date
let age = currentYear - birthYear;// get current year and sub from user birth day to get user age

document.write(`<h1 style="color:${color};">Welcome ${firstName}</h1>`);
document.write(`<p style="color:${color};">First Name: ${firstName}</p>`);
document.write(`<p style="color:${color};">Birth Year: ${birthYear}</p>`);
document.write(`<p style="color:${color};">Age: ${age}</p>`);
document.write(`<p style="color:${color};">Mobile Number: ${mobile}</p>`);

//3.
function equalfun(a, b, c){
if(a==b && b==c){
    return 3;
}
else if(a==b || a==c|| b==c){
    return 2;

}
else{
    return 0;
}
}
console.log(equalfun(3,4,3));
console.log(equalfun(1,1,1));
console.log(equalfun(3,4,1));


//4.
let sum =0;
while(true){
    let value= prompt("enter a number:");
    if (isNaN(value)){
        alert("please enter a numeric value.");
        continue;
    }
    value=Number(value);
    if(value==0){
        break;
    }
    sum+=value;

    if(sum > 50){
        break;
    }

}
alert("total sum="+sum);


//5.
let message= prompt("enter a message:");
for(let i=1; i<=6;i++){
    document.write(`<h${i}>${message}</h${i}>`);
}
