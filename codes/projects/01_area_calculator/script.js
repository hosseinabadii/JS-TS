
const PI = 3.1415
let radius
let area
document.getElementById("calculate").onclick = () => {
    radius = document.getElementById("radius").value;
    radius = Number(radius)
    area = PI * radius ** 2
    document.getElementById("result").textContent = area + " cm2"
}