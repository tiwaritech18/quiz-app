const quizData=[
    {
        question:'Javascript is an _______ language?',
        a:'object-based',
        b:'object-oriented',
        c:'procedual',
        d:'None of the above',
        correct:'b'
    },
    {
        question:'Which of the following keywords is used to define a variable in Javascript?',
        a:'var',
        b:'let',
        c:'Both A and B',
        d:'None of the above',
        correct:'c'
    },
    {
        question:'Which of the following methods is used to access HTML elements using Javascript?',
        a:'getElementbyId()',
        b:'getElementByClassName()',
        c:'Both A and B',
        d:'None of the above',
        correct:'c'
    },
    {
        question:'How can a datatype be declared to be a constant type?',
        a:'const',
        b:'var',
        c:'let',
        d:'constant',
        correct:'a'
    }

]
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitbtn=document.getElementById('submitbtn')


let currentQuiz=0;

loadQuiz();

function loadQuiz(){
    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;  
}

function getSelected(){
    const answers=document.querySelectorAll('.answer');

}
submitbtn.addEventListener("click",()=>{
    currentQuiz++;
    if(currentQuiz < quizData.length){
         loadQuiz()
    }else{
        //what will happen if questions will finish.
    }

   
});