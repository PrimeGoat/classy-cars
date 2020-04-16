class Vehicle {
  constructor(input = "", wheels = 4, max = 0, current = 0) {
    this.name = input;
    this.wheelCount = wheels;
    this.maxSpeed = max;
    this.speed = current;
  }
  accelerate() {
    this.speed += this.maxSpeed * (1/3); 
    if(this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}

class Car extends Vehicle {
  constructor(input, max) {
    super(input, 4, max);
  }
  drive() {
    return "Vroom. ";
  }
}

class Ferrari extends Car {
  constructor() {
    super("Ferrari", 180);
  }
  drive() {
    return  "Vroom. I'm a Ferrari!"
  }
  accelerate() {
    this.speed += this.maxSpeed * 0.5; 
    if(this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}
