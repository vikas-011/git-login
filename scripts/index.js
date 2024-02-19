import Navbar from "../components/Navbar.js";
import NavItems from "../components/NavItems.js";
import Footer from "../components/Footer.js"

let navItems = document.getElementById("navItems");
let nav = document.getElementById("nav");
let footer = document.getElementById("footer");
navItems.innerHTML = NavItems();
nav.innerHTML = Navbar();
footer.innerHTML = Footer();

let rot = document.getElementById("rotate");
let c = 0;
let arr = ["skill", "products", "worksflows", "process", "team"];
setInterval(() => {
    rot.innerText = arr[c % arr.length];
    c++;
}, 900);

let parent_slide = document.getElementById("parent_slide");

var obj = [
    {
        name: "Martin Therkelsen",
        id: "Mracket",
        img: "https://pbs.twimg.com/profile_images/1448520867168784385/dCBGUked_bigger.jpg",
        details: `Yesterday I passed the AZ-104 exam. <a target="_blank" href="https://www.twitter.com/pluralsight" tabindex="0">@pluralsight</a> courses are great to help prepare for these exams. <a target="_blank" href="https://www.twitter.com/hashtag/citrixctp?src=hash" tabindex="0">#citrixctp</a> <a target="_blank" href="https://www.twitter.com/hashtag/azure?src=hash" tabindex="0">#azure</a>`,
    },
    {
        name: "William Masci",
        id: "bill_ver3",
        img: "https://pbs.twimg.com/profile_images/1308211174429749248/ugAopGfO_bigger.jpg",
        details: `Just passed the <a target="_blank" href="https://www.twitter.com/hashtag/Cisco?src=hash" tabindex="0">#Cisco</a> DEVASC 200-901 exam! Tough exam, but it was a great experience. I'm excited to be part of the <a target="_blank" href="https://www.twitter.com/hashtag/DevNet?src=hash" tabindex="0">#DevNet</a> Class of 2020! Also big thanks to <a target="_blank" href="https://www.twitter.com/nickrusso42518" tabindex="0">@nickrusso42518</a> for his amazing study plan and <a target="_blank" href="https://www.twitter.com/pluralsight" tabindex="0">@pluralsight</a> course. I highly recommend it if you're studying for DEVASC`,
    },
    {
        name: "Judy",
        id: "judy_seyram",
        img: "https://pbs.twimg.com/profile_images/1289580947009155072/uegFC50F_bigger.jpg",
        details: `The best thing that happened to me in 2020 was <a target="_blank" href="https://www.twitter.com/hashtag/GADS2020?src=hash" tabindex="0">#GADS2020</a> which introduced me to <a target="_blank" href="https://www.twitter.com/pluralsight" tabindex="0">@pluralsight</a> . My interest in IT and programming peaked when i joined the program and now i believe this is the career path i want to take.<a target="_blank" href="https://www.twitter.com/hashtag/womenintech?src=hash" tabindex="0">#womenintech</a> <a target="_blank" href="https://www.twitter.com/hashtag/WomenWhoCode?src=hash" tabindex="0">#WomenWhoCode</a> <a target="_blank" href="https://www.twitter.com/hashtag/Andela?src=hash" tabindex="0">#Andela</a> <a target="_blank" href="https://www.twitter.com/hashtag/Pluralsight?src=hash" tabindex="0">#Pluralsight</a> <a target="_blank" href="https://www.twitter.com/hashtag/GADS?src=hash" tabindex="0">#GADS</a> <a target="_blank" href="https://t.co/oYchlj6V5W" tabindex="0">https://t.co/oYchlj6V5W</a>`,
    },
    {
        name: "Martin Therkelsen",
        id: "Mracket",
        img: "https://pbs.twimg.com/profile_images/1341497846168694786/Ls0jopTm_bigger.jpg",
        details: `Yesterday I passed the AZ-104 exam. <a target="_blank" href="https://www.twitter.com/pluralsight" tabindex="0">@pluralsight</a> courses are great to help prepare for these exams. <a target="_blank" href="https://www.twitter.com/hashtag/citrixctp?src=hash" tabindex="0">#citrixctp</a> <a target="_blank" href="https://www.twitter.com/hashtag/azure?src=hash" tabindex="0">#azure</a>`,
    },
    {
        name: "Martin Therkelsen",
        id: "Mracket",
        img: "https://pbs.twimg.com/profile_images/1370412190503739399/JS8236eg_bigger.jpg",
        details: `Yesterday I passed the AZ-104 exam. <a target="_blank" href="https://www.twitter.com/pluralsight" tabindex="0">@pluralsight</a> courses are great to help prepare for these exams. <a target="_blank" href="https://www.twitter.com/hashtag/citrixctp?src=hash" tabindex="0">#citrixctp</a> <a target="_blank" href="https://www.twitter.com/hashtag/azure?src=hash" tabindex="0">#azure</a>`,
    },
    {
        name: "Martin Therkelsen",
        id: "Mracket",
        img: "https://pbs.twimg.com/profile_images/1319270197702782979/TbWPouzl_bigger.jpg",
        details: `Yesterday I passed the AZ-104 exam. <a target="_blank" href="https://www.twitter.com/pluralsight" tabindex="0">@pluralsight</a> courses are great to help prepare for these exams. <a target="_blank" href="https://www.twitter.com/hashtag/citrixctp?src=hash" tabindex="0">#citrixctp</a> <a target="_blank" href="https://www.twitter.com/hashtag/azure?src=hash" tabindex="0">#azure</a>`,
    },
];

let btn_left = document.createElement("button");
btn_left.innerText = "<";
parent_slide.append(btn_left);

obj.forEach((product) => {
    console.log(product.name);
    let div = document.createElement("div");
    div.style.display = "none";
    let name = document.createElement("p");
    name.innerText = product.name;
    let id = document.createElement("p");
    id.innerText = "@" + product.id;
    let div_name = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.img;
    let div_img = document.createElement("div");
    let info = document.createElement("div");
    info.onclick = function () {
        window.location.href = `https://twitter.com/${product.id}`;
    };

    let details = document.createElement("div");
    details.innerHTML = product.details;
    div_name.append(name, id);
    div_img.append(img);
    info.append(div_img, div_name);
    div.append(info, details);
    parent_slide.append(div);
});
let btn_right = document.createElement("button");
btn_right.innerText = ">";
parent_slide.append(btn_right);

let divs = document.querySelectorAll("#parent_slide>div");
console.log(divs);
var left = 0;
var right = 3;

function slide() {
    for (let i = left; i < right; i++) {
        divs[i].style.display = "block";
    }
}

slide();
btn_right.onclick = function () {
    if (right < divs.length) {
        divs[left].style.display = "none";
        left++;
        right++;
        slide();
    }
};
btn_left.onclick = function () {
    if (left > 0) {
        right--;
        divs[right].style.display = "none";
        left--;
        slide();
    }
};
let plat = document.getElementById("plat");
let platform = document.getElementById("platform");
let body = document.getElementById("mainBody");

plat.onclick = function () {
    if (platform.style.display == "block") {
        platform.style.display = "none";
        plat.setAttribute("class", "pop_out");

        // will disable platform 2, 3 & 4
        platform2.style.display = "none";
        plat2.setAttribute("class", "pop_out");

        platform4.style.display = "none";
        plat4.setAttribute("class", "pop_out");

        platform3.style.display = "none";
        plat3.setAttribute("class", "pop_out");
        // will disable platform 2, 3 & 4

        body.setAttribute("style", "overflow: auto;");
    } else {
        platform.style.display = "block";
        plat.setAttribute("class", "pop_on");

        // will disable platform 2, 3 & 4
        platform2.style.display = "none";
        plat2.setAttribute("class", "pop_out");

        platform4.style.display = "none";
        plat4.setAttribute("class", "pop_out");

        platform3.style.display = "none";
        plat3.setAttribute("class", "pop_out");
        // will disable platform 2, 3 & 4

        body.setAttribute("style", "overflow: hidden;");
    }
};

let plat3 = document.getElementById("plat3");
let platform3 = document.getElementById("platform3");
plat3.onclick = function () {
    if (platform3.style.display == "block") {
        platform3.style.display = "none";
        plat3.setAttribute("class", "pop_out");

        // will disable platform 1, 2 & 4
        platform.style.display = "none";
        plat.setAttribute("class", "pop_out");

        platform4.style.display = "none";
        plat4.setAttribute("class", "pop_out");

        platform2.style.display = "none";
        plat2.setAttribute("class", "pop_out");
        // will disable platform 1, 2 & 4

        body.setAttribute("style", "overflow: auto;");
    } else {
        platform3.style.display = "block";
        plat3.setAttribute("class", "pop_on");

        // will disable platform 1, 2 & 4
        platform.style.display = "none";
        plat.setAttribute("class", "pop_out");

        platform4.style.display = "none";
        plat4.setAttribute("class", "pop_out");

        platform2.style.display = "none";
        plat2.setAttribute("class", "pop_out");
        // will disable platform 1, 2 & 4

        body.setAttribute("style", "overflow: hidden;");
    }
};

let plat2 = document.getElementById("plat2");
let platform2 = document.getElementById("platform2");
plat2.onclick = function () {
    if (platform2.style.display == "block") {
        platform2.style.display = "none";
        plat2.setAttribute("class", "pop_out");

        // will disable platform 1, 3 & 4
        platform.style.display = "none";
        plat.setAttribute("class", "pop_out");

        platform4.style.display = "none";
        plat4.setAttribute("class", "pop_out");

        platform3.style.display = "none";
        plat3.setAttribute("class", "pop_out");
        // will disable platform 1, 3 & 4

        body.setAttribute("style", "overflow: auto;");
    } else {
        platform2.style.display = "block";
        plat2.setAttribute("class", "pop_on");

        // will disable platform 1, 3 & 4
        platform.style.display = "none";
        plat.setAttribute("class", "pop_out");

        platform4.style.display = "none";
        plat4.setAttribute("class", "pop_out");

        platform3.style.display = "none";
        plat3.setAttribute("class", "pop_out");
        // will disable platform 1, 3 & 4

        body.setAttribute("style", "overflow: hidden;");
    }
};

let plat4 = document.getElementById("plat4");
let platform4 = document.getElementById("platform4");
plat4.onclick = function () {
    if (platform4.style.display == "block") {
        platform4.style.display = "none";
        plat4.setAttribute("class", "pop_out");

        // will disable platform 1,2 & 3
        platform.style.display = "none";
        plat.setAttribute("class", "pop_out");

        platform2.style.display = "none";
        plat2.setAttribute("class", "pop_out");

        platform3.style.display = "none";
        plat3.setAttribute("class", "pop_out");
        // will disable platform 1,2 & 3

        body.setAttribute("style", "overflow: auto;");
    } else {
        platform4.style.display = "block";
        plat4.setAttribute("class", "pop_on");

        // will disable platform 1,2 & 3
        platform.style.display = "none";
        plat.setAttribute("class", "pop_out");

        platform2.style.display = "none";
        plat2.setAttribute("class", "pop_out");

        platform3.style.display = "none";
        plat3.setAttribute("class", "pop_out");
        // will disable platform 1,2 & 3

        body.setAttribute("style", "overflow: hidden;");
    }
};
