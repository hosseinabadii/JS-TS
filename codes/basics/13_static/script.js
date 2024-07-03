class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumfrence(radius) {
        return this.getDiameter(radius) * this.PI;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(15));
console.log(MathUtil.getCircumfrence(10));
