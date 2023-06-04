let arrayAmazingAll = [
    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design1.jpg",
        // linkHover:
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design2.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design3.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design4.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design5.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design6.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design7.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design8.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design9.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design10.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design11.jpg",
    },

    {
        category: "graphicDesign",
        imgUrl: "../images/Step Project Ham/graphic design/graphic-design12.jpg",
    },

    {
        category: "webDesign",
        imgUrl: "../images/Step Project Ham/web design/web-design1.jpg",
    },

    {
        category: "webDesign",
        imgUrl: "../images/Step Project Ham/web design/web-design2.jpg",
    },

    {
        category: "webDesign",
        imgUrl: "../images/Step Project Ham/web design/web-design3.jpg",
    },

    {
        category: "webDesign",
        imgUrl: "../images/Step Project Ham/web design/web-design4.jpg",
    },

    {
        category: "webDesign",
        imgUrl: "../images/Step Project Ham/web design/web-design5.jpg",
    },

    {
        category: "webDesign",
        imgUrl: "../images/Step Project Ham/web design/web-design6.jpg",
    },

    {
        category: "webDesign",
        imgUrl: "../images/Step Project Ham/web design/web-design7.jpg",
    },

    {
        category: "landingPages",
        imgUrl: "../images/Step Project Ham/landing page/landing-page1.jpg",
    },

    {
        category: "landingPages",
        imgUrl: "../images/Step Project Ham/landing page/landing-page2.jpg",
    },

    {
        category: "landingPages",
        imgUrl: "../images/Step Project Ham/landing page/landing-page3.jpg",
    },

    {
        category: "landingPages",
        imgUrl: "../images/Step Project Ham/landing page/landing-page4.jpg",
    },

    {
        category: "landingPages",
        imgUrl: "../images/Step Project Ham/landing page/landing-page5.jpg",
    },

    {
        category: "landingPages",
        imgUrl: "../images/Step Project Ham/landing page/landing-page6.jpg",
    },

    {
        category: "landingPages",
        imgUrl: "../images/Step Project Ham/landing page/landing-page7.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress1.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress2.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress3.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress4.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress5.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress6.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress7.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress8.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress9.jpg",
    },

    {
        category: "wordpress",
        imgUrl: "../images/Step Project Ham/wordpress/wordpress10.jpg",
    },

];

function amazingTabVisualization(array, objectCategory ) {
    if (objectCategory !== "") {                                           // якщо категорія пусто, тоді ввесь масив
        array = array.filter(obj => obj.category === objectCategory);
    }

    const halfAmazingItems = array.slice(0, 12);
    // const restAmazingItems = array.slice(12, array.length);
    const amazSpaceCont = document.querySelector(".amazing-space");


    addAmazingItems(halfAmazingItems);

    function addAmazingItems(arr) {

        amazSpaceCont.innerHTML = '';
        for (let img of arr) {
            let item = document.createElement("li");
            item.classList.add("amazing-space-item");
            amazSpaceCont.appendChild(item);
            let aSelected = document.createElement("a");
            aSelected.classList.add("amazing-selected");
            item.appendChild(aSelected);
            let imgElement = document.createElement("img");
            imgElement.classList.add("image-style");
            imgElement.src = img.imgUrl;
            aSelected.appendChild(imgElement);
        }

    }
// -------------------- догрузка елементів і кнопка--------------------------------------------
            const amazingBtn = document.querySelector(".load");
            amazingBtn.addEventListener("click", () => {
                // addAmazingItems(halfAmazingItems);
                addAmazingItems(array);
                document.querySelector(".button-container").style.display = "none";
                 });
}
// ---------------------виклик функції основної--------------------------------------------

amazingTabVisualization(arrayAmazingAll, "" );

// --------------------------------- Listener on tab ------------------------------------------------

const tabContainer = document.querySelector(".amazing-work");
tabContainer.addEventListener("click", function (event) {


    if (event.target.closest(".amazing-tab")) {
        const actAmazingTab = document.querySelector(".active-tab");
        actAmazingTab.classList.remove("active-tab");
        event.target.classList.add("active-tab");
        document.querySelector(".button-container").style.display = "flex";
        const space = event.target.dataset.space;
        amazingTabVisualization(arrayAmazingAll, space );
    }
})
// -----------------------------------amazing opacity on hover ------------------------------------------------

const amazingA = document.querySelector(".amazing-selected");
const amazingSpace = document.querySelector(".amazing-space");
amazingSpace.addEventListener("mouseover", function ( event) {
if (event.target.closest(".amazing-space-item")) {
    event.target.classList.add("opacity");
    // amazingA.innerText = "creative design";
}
// let amazingTextHover = document.createElement("h3");
// amazingTextHover.classList.add("amazingText");
// amazingA.appendChild(amazingTextHover);
// console.log(amazingSpace);
}); /шукаю як додати текст
// ---------------------------------- remove opacity ------------------------------------------------------
amazingSpace.addEventListener("mouseout", function ( event) {
    if (event.target.closest(".amazing-space-item")) {
        event.target.classList.remove("opacity");

    }
});










// function addOpacity() {
//     let imgStyle = document.createElement("h3");
//     imgStyle.classList.add("amazing-hover-text");
//     // imgStyle.innerText = "creative design";
//     amazingSpace.appendChild(imgStyle);
//     console.log()
// }
//




