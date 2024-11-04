document.addEventListener("DOMContentLoaded",()=>{

    const startBtn = document.getElementById("Start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choiceList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const quizContainer = document.getElementById("quiz-container");



    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {    
            question: "Who wrote 'Hamlet'?",
            choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare"
        }
    ];

    let currentquestionIndex = 0;
    let score =0;
    let selectChoice="";

    startBtn.addEventListener("click",startQuiz);




    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden");
        quizContainer.classList.remove("hidden")
        questionText.innerText= questions[currentquestionIndex].question
        choiceList.innerHTML="";
        questions[currentquestionIndex].choices.forEach(choice =>{
            const li = document.createElement("li");
            li.innerText = choice;
            li.addEventListener("click",(e)=>{
                document.querySelectorAll("li").forEach((item) => {
                    item.classList.remove("click");
                })
                e.currentTarget.classList.add("click")
                selectChoice = e.target.innerText;
                nextBtn.classList.remove("hidden");
            });
            choiceList.appendChild(li)
        })
        
    }

    function selectAnswer(choice){
        const correctAnswer = questions[currentquestionIndex].answer;
        if(choice === correctAnswer){
            score++;
        }
        nextBtn.classList.remove("hidden");
    }
    nextBtn.addEventListener("click",()=>{
        selectAnswer(selectChoice);
        currentquestionIndex++;
        if(currentquestionIndex < questions.length){
            showQuestion();
        }
        else{
            showResult();
        }
    })

    function showResult(){
        questionText.classList.add("hidden");
        choiceList.classList.add("hidden");
        nextBtn.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.innerText = `Your score : ${score}`;
    }

    restartBtn.addEventListener("click", ()=>{
        currentquestionIndex = 0;
        score =0;
        resultContainer.classList.add("hidden");
        questionText.classList.remove("hidden");
        choiceList.classList.remove("hidden");
        showQuestion();
    })

    
})