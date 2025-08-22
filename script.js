const body = document.querySelector("body");

// body.style.padding = "20px";
body.style.display = "grid";
body.style.gridTemplateColumns = "1fr 1fr";
body.style.gap = "1rem";

//* Colors arrays
const blue = [
    {}
];


//*  Left container
let leftContainer = document.createElement("div");
leftContainer.style.cssText =
  "display: flex; flex-direction: column; gap: 1rem; padding: 10px;";

// Feature Image - Container
let color = "gray";
let featureImage = document.createElement("div");
featureImage.style.cssText = `width: 500px; height: 350px; background-color: ${color};`;

// Thumbnails - Container
let thumbnailImages = document.createElement("div");
thumbnailImages.style.cssText = `width: 500px; height: 450px;  padding: 10px; display: grid; grid-template-columns: repeat(4, 1fr);`;

let list = 12;
for (let i = 1; i <= list; i++) {
  let colorElement = document.createElement("div");
  colorElement.style.cssText =
    "width: 100px; height: 100px; background-color: red;";

  thumbnailImages.append(colorElement);
}

//? Appending left Container parts
leftContainer.append(featureImage, thumbnailImages);

//* Right Container
let rightContainer = document.createElement("div");

// Btn Container
let btnContainer = document.createElement("div");
let allBtn = document.createElement("button");
let redBtn = document.createElement("button");
let greenBtn = document.createElement("button");
let blueBtn = document.createElement("button");

btnContainer.style.cssText = "display: flex; gap: 1rem; margin-top: 50px;";
allBtn.textContent = "ALL";
allBtn.style.cssText = "font-size: 20px; padding: 5px 10px; cursor: pointer";

redBtn.textContent = "RED";
redBtn.style.cssText = "font-size: 20px; padding: 5px 10px; cursor: pointer";

greenBtn.textContent = "GREEN";
greenBtn.style.cssText = "font-size: 20px; padding: 5px 10px; cursor: pointer";

blueBtn.textContent = "BLUE";
blueBtn.style.cssText = "font-size: 20px; padding: 5px 10px; cursor: pointer";

btnContainer.append(allBtn, redBtn, greenBtn, blueBtn);

// Dropdown menu - Container
let select = document.createElement("select");
let allOption = document.createElement("option");
let redOption = document.createElement("option");
let greenOption = document.createElement("option");
let blueOption = document.createElement("option");

allOption.style.value = "all";
allOption.textContent = "ALL";
// allOption.style.cssText = ''

redOption.style.value = "red";
redOption.textContent = "RED";

greenOption.style.value = "green";
greenOption.textContent = "GREEN";

blueOption.style.value = "blue";
blueOption.textContent = "BLUE";

select.style.cssText = 'padding: 10px 15px 10px 5px; margin-top: 100px; font-size: 20px;'

// append all options in select
select.append(allOption, redOption, greenOption, blueOption);

//? Appending right container parts
rightContainer.append(btnContainer, select);

// Appending both container to body
body.append(leftContainer, rightContainer);
