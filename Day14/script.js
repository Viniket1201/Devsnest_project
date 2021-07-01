window.onclick = () => {
    console.log("window is clicked")
}
const inner = document.querySelector(".inner")
inner.onclick = () => {
    console.log("inner is clicked");
}