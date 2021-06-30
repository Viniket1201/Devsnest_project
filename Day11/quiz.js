const quiz = [{
    Question: "Inside which Html element do we put the js",
    A: "<js>",
    B: "<scripting>",
    C: "<script>",
    D: "<javascript>",
    ans: "option3"
},
{
    Question: "How do you write'Hello World' in an alert box?",
    A: "alert('Hello World');",
    B: "msgBox('Hello World');",
    C: "alertBox('Hello World');",
    D: "msg('Hello World');",
    ans: "option1"
},
{
    Question: "How to write an if statement in js",
    A: "if(i==4)",
    B: "if i=5",
    C: "if i==5 then",
    D: "if i=5 then",
    ans: "option1"
},
{
    Question: "How does a FOR loop start",
    A: "for(i=0;i<=5;i++)",
    B: "for(i=0;i<=5)",
    C: "for i=1 to 5",
    D: "for(i<=5;i++)",
    ans: "option1"  
},
{
    Question: "Which event occurs when the user clicks on an HTML element",
    A: "onmouseover",
    B: "onclick",
    C: "onchange",
    D: "onmouseclick",
    ans: "option2"
}]
const question = document.querySelector(".question");
const A = document.getElementById("ans1");
const B = document.getElementById("ans2");
const C = document.getElementById("ans3");
const D = document.getElementById("ans4");
const answer = document.querySelectorAll(".answers");
const option = document.querySelector(".options");
const showscore = document.querySelector(".score");



let qcount = 0;
let score = 0;
const loadq = () =>{
    question.innerHTML = quiz[qcount].Question;
    A.innerText = quiz[qcount].A;
    B.innerText = quiz[qcount].B;
    C.innerText = quiz[qcount].C;
    D.innerText = quiz[qcount].D;
}
loadq()
const getcheck = () => {
    let ans;
    answer.forEach((a) => {
        if(a.checked){
            ans = a.id;
        }
    });
    return ans;
};
const getuncheck = () => {
    answer.forEach((a) => {
        if(a.checked){
            a.checked = false;
        }
    });
}
option.addEventListener('click', ()=>{
  
    const rans = getcheck();
    // alert(rans);
    // alert(e.target.id);
    
    if(rans===quiz[qcount].ans){
        // e.target.style.backgroundColor = green;
        // qcount++;
        score++;
        showscore.innerText = `score:${score}`;

    }else{
        alert("wrong answer");
    }
    qcount++;
    getuncheck();
    if(qcount < quiz.length){
        loadq();
    }else{
        alert("your total score:" + score);
        alert("you want to play again...");
        document.location = document.location.href;
    }
})
