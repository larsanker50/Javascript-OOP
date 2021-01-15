class Shape {
    constructor(color, name) {
    this.color = color;
    this.name = name;
    };
    nameReturn() {
        return this.name
    };
    colorReturn() {
        return this.color
    };
};


class Circle extends Shape {
    constructor(color, name, radius) {
        super(color, name)
        this.radius = radius;
    };
    radiusSum() {
        return this.radius;
    };
    areaSum() {
        return Math.PI * this.radius * this.radius;
    };
};

class Square extends Shape {
    constructor(color, name, size) {
        super(color, name)
        this.size = size;
    };
    sizeSum() {
        return this.size;
    };
    areaSum() {
        return this.size * this.size;
    };
};

class Rectangle extends Shape {
    constructor(color, name, width, heigth) {
        super(color, name)
        this.width = width;
        this.heigth = heigth;
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
};


let CircleOne = new Circle ('blue', 'CircleOne', 1.5)
let CircleTwo = new Circle ('red', 'CircleTwo', 10)
let CircleThree = new Circle ('yellow', 'CircleThree', 20)

let SquareOne = new Square ('black', 'SquareOne', 2)
let SquareTwo = new Square ('green', 'SquareTwo', 5)
let SquareThree = new Square ('orange', 'Squarethree', 100)

let RectangleOne = new Rectangle ('black', 'RectangleOne', 2, 5,)
let RectangleTwo = new Rectangle ('green', 'RectangleTwo', 5, 10)
let RectangleThree = new Rectangle ('orange', 'RectangleThree', 100, 100)
