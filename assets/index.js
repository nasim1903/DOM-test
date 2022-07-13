document.querySelector(".title").textContent = "Hellooooo"

const btnHi = (val) => {
    document.getElementById("btn").addEventListener("click", () => {
        console.log(val)
    })
}


const div = document.querySelectorAll("div")

document.getElementById("btn").addEventListener("click", () => {
    console.log("Hi")
})

