window.onclick = () => {
    console.log("window is clicked")
}
var inner = document.querySelector(".inner")
inner.onclick = () => {
    console.log("inner is clicked");
    inner.style.backgroundColor = "blue";
}


// keybored events
// let pointer = document.querySelector(".inner")
let pTop = 0
let pLeft = 0

document.addEventListener("keydown", (event) => {
    console.log(event)
    let del = 1

    if(event.altKey)
        del += 1

    if (event.shiftKey)
        del += 2

    // if (event.metaKey)
    //     del += 3

    if (event.ctrlKey)
        del *= 2

    console.log(del)
    switch (event.key){
        case "ArrowUp":
            pTop -= del
            inner.style.top = `${pTop}px`
            break
        case "ArrowDown":
            pTop += del
            inner.style.top = `${pTop}px`
            break
        case "ArrowLeft":
            pLeft -= del
            inner.style.left = `${pLeft}px`
            break
        case "ArrowRight":
            pLeft += del
            inner.style.left = `${pLeft}px`
            break
    }
})

//input events
let input = document.getElementsByTagName("input");
input.addEventListener("input", (event) => {
    console.log(event)
    // console.log(event.target.value)
})
let btn = document.getElementsByTagName("button");
btn.addEventListener("click",() => {
    input.input = "";
})
// let input = document.querySelector("#input")

input.addEventListener("change", (event) => {
    console.log(event)
})

//mouse events
var outer = document.querySelector(".outer")
outer.addEventListener("mouseover", (event) =>{
    // console.log("mouseover", event)
    inner.style.backgroundColor = "black";
})

outer.addEventListener("mousemove", (event) => {
    console.log("mousemove", event)
    let x = event.offsetX
    let y = event.offsetY

    // let x = event.clientX
    // let y = event.clientY

    // let x = event.pageX
    // let y = event.pageY

    console.log(x,y)
    x -= inner.offsetWidth/2
    y -= inner.offsetHeight/2

    inner.style.left = `${x}px`
    inner.style.top = `${y}px`
})

outer.addEventListener("mouseout", (event) => {
    // console.log("mouseout", event)
    inner.style.backgroundColor = "yellow";
})




//drag events

let boxes = document.querySelectorAll(".box")
let items = document.querySelectorAll(".item")

let selectedItem = null;

for(let item of items){
    item.addEventListener("dragstart", (event) => {
        // console.log(event)
        // console.log("drag start")
        selectedItem = event.target
        // console.log(event.target)
    })
    // item.addEventListener("drag", (event) => {
    //     // console.log(event)
    //     // console.log("dragging")
    // })
    item.addEventListener("dragend", (event) => {
        // console.log(event)
        // console.log("drag stop")
        // selectedItem = null
    })
}

for(let box of boxes){
    box.addEventListener("dragover", (event) => {
        // console.log(event)
        event.preventDefault()
    })

    box.addEventListener("drop", (event) => {
        console.log(event)
        
        selectedItem.parentNode.removeChild(selectedItem)
        box.append(selectedItem)
    })
}


//media events

  
let events = [
    "seeking",
    "playing",
    "play",
    "pause",
    "ended"
]

let video = document.querySelector("video")

for(let event of events){
    video.addEventListener(event, ()=> {
        console.log(event)
    })
}

// document.body.addEventListener("keydown", (event) => {
//     console.log(event)
//     if (event.key === "ArrowRight"){
//         let time = video.currentTime
//         if(event.ctrlKey)
//             video.currentTime = time+ 1
//         else
//             video.currentTime = time+ 0.1
//     }
// })

document.body.addEventListener("click", (event)=>{
    console.log("clicked body")
    console.log(event)
    event.stopPropagation()
    // event.cancelBubble()
})

document.documentElement.addEventListener("click", ()=>{
    console.log("clicked doc")
})