const macBook = {
  brand: "Apple",
  model: "MacBook Pro",
  year: 2021,
  start: function () {
    console.log("MacBook started");
  },
  shutdown: function () {
    console.log("MacBook shutting down");
  },
};

const macBookSpecs = () => {
  console.log("MacBook Specs: 16GB RAM, 512GB SSD, M1 Chip");
};

module.exports = { macBook, macBookSpecs };
