const quizzes = document.querySelectorAll(".quizz");

quizzes.forEach(quiz => {

    const btn1 = quiz.querySelector(".btn-1");
    const btn2 = quiz.querySelector(".btn-2");
    const btn3 = quiz.querySelector(".btn-3");

    const rep1 = quiz.querySelector(".rep-1");
    const rep2 = quiz.querySelector(".rep-2");
    const rep3 = quiz.querySelector(".rep-3");

    btn1.addEventListener("click", () => {
        rep1.classList.add("active");
        rep2.classList.remove("active");
        rep3.classList.remove("active");
    });

    btn2.addEventListener("click", () => {
        rep2.classList.add("active");
        rep1.classList.remove("active");
        rep3.classList.remove("active");
    });

    btn3.addEventListener("click", () => {
        rep3.classList.add("active");
        rep1.classList.remove("active");
        rep2.classList.remove("active");
    });

});