// declare class

// export class using module.exports

class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("draw shape");
  }
  calculateArea() {
    console.log("calculate area");
  }
}
module.exports = { Shape };
