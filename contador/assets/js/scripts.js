var data = 0;
function increment(){
    data = data + 1;
    document.getElementById("currentNumber").innerText = data;
}
function decrement(){
    data = data - 1;
    document.getElementById("currentNumber").innerText = data;
}