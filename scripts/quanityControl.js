window.onload = () => {
    const plus = document.querySelector(".plus-button"),
    minus = document.querySelector(".minus-button"),
    quantity = document.querySelector(".quantity");

    let a = 0;

    plus.addEventListener("click", ()=> {
        a++;
        quantity.innerText = a.toString();
    });
    
    minus.addEventListener("click", ()=> {
        if (a > 0) {
            a--;
            quantity.innerText = a.toString();
        }
    });
}