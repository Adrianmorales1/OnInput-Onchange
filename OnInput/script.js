var nameHQ = document.getElementById('name');
console.log(nameHQ);

function theName(element) {
    console.log(element.value)
    nameHQ.innerText = element.value;
}

var boom = document.getElementById('woohoo')

function trial(element) {
    boom.innerText = element.value;
}

var chacalaka = document.getElementById('super');

function test(element) {
    chacalaka.innerText = element.value;
}

function foodorder(element) {
    console.log(element.value)
    alert(`you would like some ${element.value} food`)
}
