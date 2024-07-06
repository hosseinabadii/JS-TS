const dayInput = document.getElementById("day")
const btn = document.getElementById('btn')
const result = document.getElementById("result")
let day
let message

btn.onclick = () => {
    day = Number(dayInput.value)
    switch(day) {
        case 1:
            message = "It's Monday"
            break
        case 2:
            message = "It's Tuesday"
            break
        case 3:
            message = "It's Wednesday"
            break
        case 4:
            message = "It's Thursday"
            break
        case 5:
            message = "It's Friday"
            break
        case 6:
            message = "It's Saturday"
            break
        case 7:
            message = "It's Sunday"
            break
        default:
            message = `${day} is not a day!`
            break
    }
    result.textContent = message
}
