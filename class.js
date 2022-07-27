//class
class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    perimeter() {
        let sum = 0;
        for (let i = 0; i < this.sides.length; i++) {
            sum += this.sides[i];
        }
        return sum;
    }
    area() {
        let sum = 0;
        for (let i = 0; i < this.sides.length; i++) {
            sum += this.sides[i];
        }
        return sum / 2;
    }
}


// const polygon = new Polygon(10, 20, 34, 45);
// console.log(polygon.perimeter());

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle);