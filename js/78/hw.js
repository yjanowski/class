(function () {
    'use strict';

    function Vehicle(color, speed) {
        this.color = color,
        this.speed = speed
        this.go = function go(s) {
            this.speed = s;
            console.log(`Now going at speed ${this.speed} mp/h.`);
        },
            this.print = function print() {
                console.log(`Color is ${this.color} and current speed is ${this.speed} mp/h.`);
            }

    }

function Plane(color,speed){
    Vehicle.call(this, color, speed)
    this.go = function go(s){
        this.speed = s;
        console.log(`Now flying at ${this.speed} m/ph.`);
    }

}

    const vehic = new Vehicle(`Black`,`45`);
    vehic.print();
    vehic.go(75);
    vehic.print();

    const p2 = new Plane(`Grey`,`200`);
    p2.print();
    p2.go(80);
    

}());