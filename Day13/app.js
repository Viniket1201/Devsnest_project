const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const fox = document.getElementById("fox");
const dogBtn = document.getElementById("dog-btn");
const catBtn = document.getElementById("cat-btn");
const foxBtn = document.getElementById("fox-btn");


dogBtn.addEventListener('click',getDog);
catBtn.addEventListener('click',getCat);
foxBtn.addEventListener('click',getFox);

function getDog(){
    fetch(`https://random.dog/woof.json`)
    .then(res => res.json())
    .then(data => {
        dog.innerHTML = `<img src="${data.url}"/>`
    })
}
function getCat(){
    fetch(`https://aws.random.cat/meow`)
    .then(res => res.json())
    .then(data => {
        cat.innerHTML = `<img src="${data.file}"/>`
    })
}
function getFox(){
    fetch(`https://randomfox.ca/floof/`)
    .then(res => res.json())
    .then(data => {
        fox.innerHTML = `<img src="${data.image}"/>`
    })
}