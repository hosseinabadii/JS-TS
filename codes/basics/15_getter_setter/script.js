class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth
        } else {
            console.error("Width must be a positive number.")
        }
    }

    get width() {
        return `${this._width.toFixed(2)} cm`
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight
        } else {
            console.error("Height must be a positive number.")
        }
    }

    get height() {
        return `${this._height.toFixed(2)} cm`
    }

    get area() {
        const areaValue = this._width * this._height
        return `${areaValue.toFixed(2)} cm^2`
    }
}


const rectangle1 = new Rectangle(-999999, "text")
console.log(rectangle1)

const rectangle2 = new Rectangle(20, 30)
console.log(rectangle2)
console.log(rectangle2.width)
console.log(rectangle2.height)
console.log(rectangle2.area)

