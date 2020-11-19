// import using require
const Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("override caluclate area");
  }
}

// export class using module.exports
module.exports = Circle;
