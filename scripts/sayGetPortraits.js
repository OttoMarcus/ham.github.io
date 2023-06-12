
let arrayOfPortraits = [
    {
        name: "Bjarne Stroustrup",
        imgUrl: "../images/Step Project Ham/portraits/stro.png",
        resume: "Bjarne Stroustrup is the designer and original implementer of C++ as well as the author" +
         "of The C++ Programming Language (Fourth Edition), A Tour of C++ (Second edition), Programming: Principles:" +
          "and Practice using C++ (Second Edition), and many popular and academic publications. For 30 years," +
          "C++ has been one of the most widely used programming languages. He is actively involved in "+
          "the ISO standardization of C++."
    },

    {
        name: "Elon Musk",
        imgUrl: "../images/Step Project Ham/portraits/musk.webp",
        resume: "Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a business magnate and investor." +
            " He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect" +
            " of Tesla, Inc.; owner, CTO and chairman of Twitter; founder of the Boring Company and X Corp.;" +
            " co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation. " +
            "Musk is the wealthiest person in the world according to the Bloomberg Billionaires Index, " +
            "and second-wealthiest according to the Forbes's Real Time Billionaires list as of June 2023," +
            " primarily from his ownership stakes in Tesla and SpaceX, with an estimated net worth of around " +
            "$205 billion according to Bloomberg and $211.4 billion according to Forbes."
    },

    {
        name: "Edward Page",
        imgUrl: "../images/Step Project Ham/portraits/lary_page.jpg",
        resume: "Lawrence Edward Page(born March 26, 1973) is an American business magnate, " +
            "computer scientist and internet entrepreneur. He is best known for co-founding Google with Sergey Brin." +
            "Page was the chief executive officer of Google from 1997 until August 2001 (stepping down in favor" +
            " of Eric Schmidt) and then again from April 2011 until July 2015 when he moved to become CEO of its " +
            "newly formed parent organisation Alphabet Inc. which was created to deliver \"major advancements\" " +
            "as Google's parent company,[6] a post he held until December 4, 2019 when he along with his co-founder" +
            " Brin stepped down from all executive positions and day-to-day roles within the company. He remains" +
            " an Alphabet board member, employee, and controlling shareholder."
    },

    {
        name: "Steven Jobs",
        imgUrl: "../images/Step Project Ham/portraits/steve.jpg",
        resume: "Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate," +
            " inventor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority " +
            "shareholder of Pixar; a member of The Walt Disney Company's board of directors following its " +
            "acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He was a pioneer of the personal" +
            " computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple " +
            "co-founder Steve Wozniak."
    },

    {
        name: "Sergey Brin",
        imgUrl: "../images/Step Project Ham/portraits/brin.jpg ",
        resume: "Sergey Mikhailovich Brin is an American business magnate who co-founded Google with Larry Page." +
            " Brin was the president of Google's parent company, Alphabet Inc., until stepping down from the " +
            "role on December 3, 2019.[1] He and Page remain at Alphabet as co-founders, controlling shareholders " +
            "and board members. As of May 2023, Brin is the 10th-richest person in the world, with an estimated " +
            "net worth of $93.2 billion."
    },

    {
        name: "Linus Torvalds",
        imgUrl: "../images/Step Project Ham/portraits/Linus.webp",
        resume: "Linus Benedict Torvalds born 28 December 1969) is a Finnish software engineer who is the" +
            " creator and, historically, the lead developer of the Linux kernel, used by Linux distributions" +
            " and other operating systems such as Android. He also created the distributed version control system Git."
    },

    {
        name: "Bill Gates",
        imgUrl: "../images/Step Project Ham/portraits/bill.jpg",
        resume: "William Henry Gates III (born October 28, 1955) is an American business magnate, investor, " +
            "and philanthropist. He is best known for co-founding software giant Microsoft, along with his late " +
            "childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of " +
            "chairman, chief executive officer (CEO), president and chief software architect, while also being its " +
            "largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer" +
            " revolution of the 1970s and 1980s."
    },

]

const biography_container = document.querySelector(".biography");
const position = document.querySelector(".position");
function addBiography(arr) {
    for (let txt of arr) {
        let article = document.createElement("div");
        article.classList.add("article");
        biography_container.appendChild(article);
        article.innerText = txt.resume;

      
        let pName = document.createElement("p");
        pName.classList.add("pName");
        position.appendChild(pName);
        pName.innerHTML = txt.name;
    }
}

addBiography(arrayOfPortraits);

//
// const slickContainer = document.querySelector(".slick-container");
// function addPortrait(arr) {
//     let bigPortraitContainer = document.createElement("ul");
//     bigPortraitContainer.classList.add("portraitBig");
//     slickContainer.appendChild(bigPortraitContainer);
//
//     for (let img of arr) {
//         let portraitLi = document.createElement("li");
//         portraitLi.classList.add("slider");
//         bigPortraitContainer.appendChild(portraitLi);
//         let portrait = document.createElement("img");
//         portrait.src = img.imgUrl;
//         portraitLi.appendChild(portrait);
//     }
//
//     let smallPortraitContainer = document.createElement("ul");
//     smallPortraitContainer.classList.add("portraitSmall");
//     slickContainer.appendChild(smallPortraitContainer);
//
//     for (let img of arr) {
//         let portraitLi = document.createElement("li");
//         portraitLi.classList.add("slider");
//         smallPortraitContainer.appendChild(portraitLi);
//         let pict = document.createElement("img");
//         pict.src = img.imgUrl;
//         portraitLi.appendChild(pict);
//     }
// }
//
// addPortrait(arrayOfPortraits);