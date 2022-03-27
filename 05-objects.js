//CREATE OBJECT using LITERALS
const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function(){
        console.log("I am eating " + this.name);
    }
};

cookie.name = "Chip Mint";
cookie.isGlutenFree = true;
cookie["+Yummy"] = false; //have special character
//console.log(cookie);

//call function eatCookie to run
cookie.eatCookie();

//CREATE OBJECT using CLASSES
class Cookie {
    constructor(name, isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
    eatCookie(){
        console.log("I am eating " + this.name);
    }
}
const myCookie = new Cookie("Chocolate", false);
//call function eatCookie to run
myCookie.eatCookie();

///Show class Cookie
console.log(myCookie);