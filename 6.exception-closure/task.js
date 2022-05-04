parseCount = function (value) {
    let number = Number.parseInt(value);
    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

validateCount = function (value) {
    try {
        number = parseCount(value);
        return number;
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(ab, bc, ca) {
        this.side1 = ab;
        this.side2 = bc;
        this.side3 = ca;
        this.validate();
    }
    
    validate() {
        let isValid = this.side1 + this.side2 > this.side3 
            && this.side2 + this.side3 > this.side1 
            && this.side1 + this.side3 > this.side2;
        if (!isValid) {
            throw new Error("Треугольник с такими сторонами не существует");
    }
}

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number.parseFloat(Math.sqrt(
            p * (p - this.side1) * (p - this.side2) * (p - this.side3)
        ).toFixed(3));
    }
}

getTriangle = function (ab, bc, ca) {
    try {
        let triangle = new Triangle(ab, bc, ca);
        return triangle;
    } catch (e) {
        return {
            getPerimeter: function () {
                return "Ошибка! Треугольник не существует";
            },
            getArea: function () {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
    
}