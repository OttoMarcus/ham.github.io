document.body.addEventListener("click", function(event) {
    event.preventDefault();
    if  (event.target.closest(".bookmark-item")) {
        const  actTab = document.body.querySelector(".active");
        actTab.classList.remove("active");

        const actArticle = document.querySelector(".text-content");
        const activeText = actArticle.querySelector(".active");
        activeText.classList.remove("active");

        event.target.classList.add("active");
        const mark = event.target.dataset.mark;
        const content = document.getElementById(mark);
        content.classList.add("active");
    }
})