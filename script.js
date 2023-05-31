

 const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my land",
        b: "hyper text makeup langauge",
        c: "hypertext markup langauge",
        d:"hypertext markup langauge",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "cascading style sheets",
        b: "casceding style sheep",
        c: "cartoon style sheet",
        d:"cascading super sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "hyperyext transfer product",
        b: "hypertext test protocol",
        c: "hypertext transfer process",
        d:"hypertext Transfer protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of js?",
        a: "jav script",
        b: "jason scrip",
        c: "java shape",
        d:"jack script",
        ans: "ans1"
    }
    ];
     const question = document.querySelector('.question');
     const option1 = document.querySelector('#option1');
     const option2 = document.querySelector('#option2');
     const option3 = document.querySelector('#option3');
     const option4 = document.querySelector('#option4');
     const submit= document.querySelector('#submit');
    
      const answers = document.querySelectorAll('.answer');
    
      const showScore = document.querySelector('#showScore')
    
     let questionCount = 0;
     const loadQuestion = () => {
      const selected_question = quizDB[questionCount];
      
      question.innerText = selected_question.question;
      option1.innerText = selected_question.a;
      option2.innerText = selected_question.b;
      option3.innerText = selected_question.c;
      option4.innerText = selected_question.d;
    
     }
     loadQuestion();
    
     const getCheckAnswer = () => {
        let answer;
        answers.forEach((curAnsElem) => {
            if (curAnsElem.checked) {
                answer = curAnsElem.id;
            }
        });
        return answer;
     };
     
     const deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.chacked = false);
     }
    
     submit.addEventListener('click', () => {
        const checkAnswer = getCheckAnswer();
        console.log(checkAnswer);
        // Rest of the code...
    
     
    
        if(checkAnswer === quizDB[questionCount].ans){
            score++;
        };
        questionCount ++;

    
        deselectAll();
        if(questionCount < quizDB.length){
            loadQuestion();
        }else{
    
            showScore.innerHTML = `
            <h3> you scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()"> play again </button>
         `;
         
            showScore.classList.remove('scoreArea')
        }
     });
     
     
 