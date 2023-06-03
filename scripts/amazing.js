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

function amazingTabVisualization(array, objectCategory) {
let arrayTab = array.filter(obj => obj.category === objectCategory);

const halfAmazingItems = arrayTab.slice(0, 12);
const restAmazingItems = arrayTab.slice(12, arrayTab.length);
function addAmazingItems(arr) {
        for (let img of arr) {
            let amazSpaceCont = document.querySelector(".amazing-space");  
            let item = document.createElement("li");                       
            item.classList.add("amazing-space-item");
            amazSpaceCont.appendChild(item);
            let aSelected = document.createElement("a");                   
            aSelected.classList.add("amazingSelected");
            item.appendChild(aSelected);

            const imgElement = document.createElement("img");          
            imgElement.src = img.imgUrl;                                    
            // console.log(img.imgUrl);

            aSelected.innerHTML = "";
            aSelected.appendChild(imgElement);
            img += 1;
    }
}

addAmazingItems(halfAmazingItems);

const amazingBtn = document.querySelector(".load");
amazingBtn.addEventListener("click", (event) => {
    addAmazingItems(restAmazingItems);
    document.querySelector(".button-container").style.display = "none";

}, { once: true });
}

amazingTabVisualization(arrayAmazingAll, "wordpress");

// --------------------------------- Get new array tab------------------------------------------------
// function amazingItemFilter (array, objectCategory) {
//     return array.filter(obj => obj.category === objectCategory);
// }
// let arrayTab = amazingItemFilter(arrayAmazingAll, "graphicDesign");
// console.log(arrayTab);



