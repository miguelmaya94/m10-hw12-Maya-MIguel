// YOUR CODE HERE
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    performMainenance() {

        console.log("Maintenance complete")

    }
    honk() {

    console.log("BEEP BEEP!")
    }
    
       
}


let mySweetRide = new Car("pontiac", "Fiero", 1988);
mySweetRide.honk()



if (mySweetRide)
    setTimeout(function () {
        mySweetRide.performMainenance()
    }, 3000);



