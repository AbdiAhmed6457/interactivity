
let count = 0;

document.getElementById(`increase`).onclick = function () {
    count++;
    document.getElementById(`counterLabel`).innerHTML = count;
}
