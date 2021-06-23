let dynamicArr=["AZAX",'AZAX','JSON','JSON','API','API','NODE','NODE','REACT','REACT','MONGO','MONGO','EXPRESS','EXPRESS','JS','JS']
for(let i=0;i<16;i++){
    let rNo=Math.floor(Math.random()*dynamicArr.length);
    // console.log(rNo,dynamicArr[rNo],i)
    document.querySelector(`#sec${i+1}`).innerHTML=dynamicArr[rNo];
    dynamicArr.splice(rNo,1);
    // console.log(dynamicArr.length)
}
let storeArray=[];
let idArray=[];
let countTry=0;
let countCards=0;
main.addEventListener('click',(e)=>{
    let eTarget=e.target;
    if(eTarget.classList.contains('sec')&&(idArray.length===0 || idArray[0]!==eTarget)){
        countTry+=1;
        if (countTry>30){
            alert("You Lost,Play Again....");
            document.location=document.location.href;
        }
        else{
        lifeLeft.innerHTML=`Remaining Moves:${30-countTry}`
        eTarget.style.cssText="transform: rotateY(0deg);color: white";
        let val=eTarget.innerHTML;
        storeArray.push(val);
        idArray.push(eTarget);
        if (storeArray.length===2){
            setTimeout(decide,500);
        }
    }
}
});
function decide(){
    if(storeArray[0]===storeArray[1]){
        // console.log(storeArray,"youwin")
        // console.log(idArray[0])
        idArray[0].style.visibility='hidden';
        idArray[1].style.visibility='hidden';
        countCards+=2;
        // console.log(countCards)
    }
    else{
        // console.log('you lose')
        idArray[0].style.cssText="transform: rotateY(180deg);color: transparent";
        idArray[1].style.cssText="transform: rotateY(180deg);color: transparent";
    }
    if(countCards===16){
        alert("You won,Play Again....");
        document.location=document.location.href;
    }
    storeArray=[];
    idArray=[];
}