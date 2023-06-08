const span = document.querySelector(".date");
span.innerText = getFullYear();
function getFullYear () {
    let date = new Date();
    return date.getUTCFullYear();
}