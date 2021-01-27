let counter = 1.75;
function count() {
    counter *=  322.547;
    const conteo = document.querySelector('h1');
    const letrero = document.querySelector('h2');
    conteo.innerHTML = `jodete teteo:${counter}`;
    console.log(`jodete teteo:${counter}`);
    if (letrero.innerHTML === 'hello') {
        letrero.innerHTML = 'goodbye';
    } else {
        letrero.innerHTML = 'hello';
    }

}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = count;
});