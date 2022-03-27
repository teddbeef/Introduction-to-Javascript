const car ={
    price: 2000,
    color: "blue",
    numDoors: 3
};

if (car.price < 2000 || (car.color == "blue" && car.numDoors == 4)){
    console.log("We'll take it!")
}else {
    console.log("Welp, it's best to keep looking")
}