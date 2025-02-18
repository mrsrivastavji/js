const balance = 900;

if(balance<500)
    console.log("Balance is less than 500");
else if(balance<750)
    console.log("Balance is less than 750");
else if(balance<1000)
    console.log("Balance is less than 1000");
else 
    console.log("Balance is more than 1000");


let a="hey";
let b="hii";

if(a=="hey" || a=="Hey"){
    if(b=="hii" || b=="Hii"){
        console.log("Welcom");
    }
    else
        console.log("Not welcome");
}
else
    console.log("Not welcome");