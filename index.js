
let count = 0;

document.getElementById(`increase`).onclick = function () {
    count++;
    document.getElementById(`counterLabel`).innerHTML = count;
}

document.getElementById(`decrease`).onclick = function() {
    count--;
    document.getElementById(`counterLabel`).innerHTML = count;
}
document.getElementById(`reset`).onclick = function() {
    count = 0;
    document.getElementById(`counterLabel`).innerHTML = count;
}