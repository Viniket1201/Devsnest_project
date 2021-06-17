const center = document.getElementById("main");
center.addEventListener("click",(e)=>{
    let cls = e.target.className;
    if(cls==="center white"){
        e.target.className = "center red";
       
    }if(cls === "center red"){
        e.target.className = "center white";
        
    }
    
});