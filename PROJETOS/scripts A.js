
const prevButoon = document.getElementById("prev-antes")
const nextButoon = document.getElementById("nex-depois")
const items = document.querySelectorAll("item active")
const dots = document.querySelectorAll("dots-pontos")
const numberIndicator = document.querySelector("numbers-numeros")
const list = document.querySelector("list")


let active = 0;
const total = items.length
let timer;


function update(direction) {
    document.querySelector(".item.active").classList.remove("active")
    document.querySelector(".dot.active").classList.remove("active")

    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0
        }
    }


    else if (direction < 0) {
        active = -1

        if (active < 0) {
            active = total - 1
        }

    }

    items[active].classList.add("active")
    dots[active].classList.add("active")

    numberIndicator.textContent = String(active + 1).padStart(2, "0")

}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 5000);


prevButoon.addEventListener("click", () => {
    update(-1)

})


prevButoon.addEventListener("click", () => {
    update(1)

})

