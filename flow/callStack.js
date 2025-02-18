function one(){
    console.log("One");
    two()
    console.log("1")
}

function two(){
    console.log("Two");
    three()
    console.log("2")
}

function three(){
    console.log("Three");
    console.log("3")
}

one()