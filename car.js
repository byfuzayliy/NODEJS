const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function () {
    console.log("Car started");
  },
  stop: function () {
    console.log("Car stopped");
  },
};

const carSpeed = () => {
  console.log("The car is moving at 60 mph");
};

module.exports = { car, carSpeed };
