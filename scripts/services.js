const bookmark = document.querySelectorAll(".bookmarkItem");
let bookmarksField = document.getElementsByClassName("bookmarks");
const contentContainer = document.getElementsByClassName("text-content");
const contentText = document.querySelectorAll(".content-item");

function remActive(obj) {
    obj.forEach((tab) => tab.classList.remove("active"));
}

document.body.addEventListener("click", function(event) {
    event.preventDefault()
    if  (event.target.closest(".bookmark-item")) {
        // remActive(bookmark);
        const actBookmark = bookmarksField.querySelector(".active");
        actBookmark.classList.remove("active");
        // remActive(contentText);

        // event.target.classList.add("active");
        // const contentId = event.target.dataset.mark;
        // const content = document.getElementById(contentId);
        // content.classList.add("active");
    }
})