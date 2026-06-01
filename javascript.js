const increasebt = document.querySelector(".counterbutton--increase");
const decreasebt = document.querySelector(".counterbutton--decrease");
const valuetxt = document.querySelector(".value");
const resetbt = document.querySelector(".reset");
function increase(){
    const currentvalue = Number(valuetxt.textContent);
    const newvalue = currentvalue + 1;
    valuetxt.textContent = newvalue;
}
increasebt.addEventListener("click", increase);

function decrease(){
    const currentvalue = Number(valuetxt.textContent);
    if (currentvalue > 0){
        const newvalue = currentvalue - 1;
        valuetxt.textContent = newvalue;
    }
}   
decreasebt.addEventListener("click", decrease);

function resetvalue(){
    const currentvalue = Number(valuetxt.textContent);
    const newvalue = 0;
    valuetxt.textContent = newvalue;
}
resetbt.addEventListener("click", resetvalue);
document.addEventListener("keydown", increase)



