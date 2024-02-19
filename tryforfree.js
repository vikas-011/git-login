import individual_Price_2 from "./ind1.js";
import monthly_yearly_1 from "./month1.js";
import monthly_yearly_2 from "./month2.js";
import fourteen_day_1 from "./fourteen1.js";
import fourteen_day_2 from "./fourteen2.js";

let sliderZeroPercent = document.getElementById("kasliderZeroPercent");
let sliderFiftyPercent = document.getElementById("kasliderFiftyPercent");
let sliderHundredPercent = document.getElementById("kasliderHundredPercent");

let slider = document.getElementById("kaslider");
let circleSlider = document.getElementById("kacircleSlider");

let buttonGroup2 = document.getElementsByClassName("kabuttonGroup2")[0];

let dataDiv = document.getElementsByClassName("kadataDiv")[0];
buttonGroup2.innerHTML = monthly_yearly_2();
dataDiv.innerHTML = individual_Price_2();

sliderZeroPercent.addEventListener("click", slideLeft);
function slideLeft() {
    slider.setAttribute("class", "kaslider0");
    circleSlider.setAttribute("class", "kacircleSlider0");

    buttonGroup2.innerHTML = monthly_yearly_2();

    dataDiv.innerHTML = individual_Price_2();
}

sliderFiftyPercent.addEventListener("click", slideMiddle);
function slideMiddle() {
    slider.setAttribute("class", "kaslider50");
    circleSlider.setAttribute("class", "kacircleSlider50");

    buttonGroup2.innerHTML = null;

    dataDiv.innerHTML = fourteen_day_1();
}

sliderHundredPercent.addEventListener("click", slideRight);
function slideRight() {
    slider.setAttribute("class", "kaslider100");
    circleSlider.setAttribute("class", "kacircleSlider100");

    buttonGroup2.innerHTML = null;

    dataDiv.innerHTML = fourteen_day_2();
}


var collapsibles = document.getElementsByClassName("kacollapsible");
for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


let counter = 0;
buttonGroup2.addEventListener("click", changeData);
function changeData() {
    if (counter % 2 == 0) {
        let standardPricingCardBill = document.getElementById("kastandardPricingCardBill");
        let premiumPricingCardBill = document.getElementById("kapremiumPricingCardBill");
        standardPricingCardBill.innerHTML = "then ₹ 1024.88/month, billed annually (₹ 12,299.00)";
        premiumPricingCardBill.innerHTML = "then ₹ 1533.19/month, billed annually (₹ 18,399.00)";
        counter++;
    } else 
    
    {
        let standardPricingCardBill = document.getElementById("kastandardPricingCardBill");
        let premiumPricingCardBill = document.getElementById("kapremiumPricingCardBill");
        standardPricingCardBill.innerHTML = "then ₹ 1,499.00/month, billed monthly";
        premiumPricingCardBill.innerHTML = "then ₹ 2,299.00/month, billed monthly";
        counter++;
    }
}