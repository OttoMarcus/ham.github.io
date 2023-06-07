const comment = document.querySelectorAll(".a-comment");
comment.forEach(addComment);
function addComment(item) {
    let comm = document.createElement("p");
    comm.classList.add("p-comment");
    item.appendChild(comm);
    comm.innerText = "By admin  |  2 comment";
}
