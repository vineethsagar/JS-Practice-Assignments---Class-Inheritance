// import using require
const Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor() {}
  calculateArea() {
    console.log("override caluclate area");
  }
}

// export class using module.exports
module.exports = { Circle };
