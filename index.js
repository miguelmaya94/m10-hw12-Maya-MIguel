// YOUR CODE HERE
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    performMaintenance() {

        setTimeout(function () {
            console.log("Maintenance complete")
        }, 3000);
     
       

    }
    honk() {

    console.log("BEEP BEEP!")
    }
    
       
}


let mySweetRide = new Car("pontiac", "Fiero", 1988);

mySweetRide.honk()
mySweetRide.performMaintenance()


if (mySweetRide)
    setTimeout(function () {
        mySweetRide.performMaintenance()
    }, 3000);




