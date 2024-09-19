let img = document.querySelector("#img-to-replace");
let ask_btn = document.querySelector("#ask-btn");
let ask_input = document.querySelector("#ask-input");
let h1 = document.querySelector("h1");

ask_btn.addEventListener("click", () => {
    if(ask_input.value.length>0) {
        yesno();
    }
})

function yesno() {
    fetch("https://yesno.wtf/api")
        .then((response) => response.json())
        .then((json) => {
            h1.textContent=json.answer;
            img.src=json.image;
        })
}