const questions=[
    {
        'que':"Which is the following is a markup language?",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd':'PHP',
        'correct':'a'

    },
    {
        'que': "What year was JavaScript launched?",
        'a':'1996',
        'b':'1995',
        'c': '1994',
        'd': "none of these",
        'correct':'b'
    },
    {
        'que': "What does CSS stands for?",
        'a':'Hypertext Markup Language',
        'b':'Cascading Style Sheet',
        'c': 'Jason Object Model',
        'd': "none of these",
        'correct':'a' 
    }
   
];
let index = 0;
let total= questions.length;
let correct = 0,wrong = 0;
const  quebox = document.getElementById("quebox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = ()=>{
    if(total === index){
        return quizEnd()
    }
    reset()
        const data = questions[index]
        quebox.innerText = ` ${index+1} ${data.que}`;
        optionInputs[0].nextElementSibling.innerText = data.a;
        optionInputs[1].nextElementSibling.innerText = data.b;
        optionInputs[2].nextElementSibling.innerText = data.c; 
        optionInputs[3].nextElementSibling.innerText = data.d;   
    }
    document.querySelector('#submit').addEventListener(
       "click" ,
       function(){
        const data = questions[index];
    const ans=getAnswer()
    if(ans===data.correct){
       right++; 
    } 
    else{
        wrong++;
    }
    index++;
    loadQuestion();
}

       
    )
    
const getAnswer = ()=>{
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                ans=input.value;
            }
          }
    
    )
    return ans;
        }
        const reset = () =>{
            optionInputs.forEach(
                (input)=>{
                    input.checked = false;
                }
            )
        }
    
 const endQuiz = () =>{
    document.getElementById("box").innerHTML =
  ` <h3>Thank you for playing the quiz</h3>
     <h2> ${right} / ${total} are </h2>
  ` 

 }  

loadQuestion(index);