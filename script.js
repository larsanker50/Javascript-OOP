class Circle {
    constructor(radius, color, name) {
        this.radius = radius;
        this.color = color;
        this.name = name;
    };
    radiusSum() {
        return this.radius;
    };
    areaSum() {
        return Math.PI * this.radius * this.radius;
    };
    nameReturn() {
        return this.name;
    };
};

class Square {
    constructor(size, color, name) {
        this.size = size;
        this.color = color;
        this.name = name;
    };
    sizeSum() {
        return this.size;
    };
    areaSum() {
        return this.size * this.size;
    };
    nameReturn() {
        return this.name
    }
};

class Rectangle {
    constructor(width, heigth,  color, name) {
        this.width = width;
        this.heigth = heigth;
        this.color = color;
        this.name = name;
    };
    widthSum() {
        return this.width;
    };
    heigthSum() {
        return this.heigth;
    };
    areaSum() {
        return this.width * this.heigth;
    };
    nameReturn() {
        return this.name
    }
};


let CircleOne = new Circle (1.5, 'blue', 'CircleOne')
let CircleTwo = new Circle (10, 'red', 'CircleTwo')
let CircleThree = new Circle (20, 'yellow', 'CircleThree')
let SquareOne = new Square (2, 'black', 'SquareOne')
let SquareTwo = new Square (5, 'green', 'SquareTwo')
let SquareThree = new Square (100, 'orange', 'Squarethree')
let RectangleOne = new Rectangle (2, 5, 'black', 'RectangleOne')
let RectangleTwo = new Rectangle (5, 10, 'green', 'RectangleTwo')
let RectangleThree = new Rectangle (100, 100, 'orange', 'RectangleThree')
