var input = document.querySelector(".input");
var number = document.querySelectorAll(".numbers");
var del_btn = document.querySelector(".delete");
var equalBtn = document.querySelector(".x");
var back = document.querySelector(".back")

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", (y) => {
        input.value += y.target.dataset.number
    })
}
del_btn.addEventListener("click", () => {
    input.value = ""
})

equalBtn.addEventListener("click", () => {
    if (input.value == "") {
        input.value = ""

    } else {
        input.value = eval(input.value)
    }





})


back.addEventListener("click", () => {
    input.value = input.value.substring(0, input.value.length - 1)

})