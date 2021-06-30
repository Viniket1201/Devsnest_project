window.onload = ()=> {
    const btn = document.getElementById("btn");
    const answer = document.getElementById('result');
 
     
    btn.addEventListener('click',calculation);
    function calculation(e){
        const fValue = document.getElementById('first').value;
        const sValue = document.getElementById('second').value;
        if(e.target.id=='add'){
            const result = parseInt(fValue) + parseInt(sValue);
            answer.textContent = result
        }if(e.target.id=='sub'){
            const result = parseInt(fValue) - parseInt(sValue);
            answer.textContent = result
        }if(e.target.id=='mul'){
            const result = parseInt(fValue) * parseInt(sValue);
            answer.textContent = result
        }if(e.target.id=='div'){
            const result = parseInt(fValue) / parseInt(sValue);
            answer.textContent = result
        }
        
    }

}