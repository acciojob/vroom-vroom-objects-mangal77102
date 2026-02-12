// Complete the js code
function Car(make, model) {
  this._make = make;
  this._model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return this._make + " " + this._model;
};


function SportsCar(make, model, topSpeed) {
  // Call parent constructor
  Car.call(this, make, model);

  this._topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);

// Fix constructor reference
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this._topSpeed;
};


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

