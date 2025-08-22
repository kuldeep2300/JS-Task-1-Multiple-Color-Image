const body = document.querySelector("body");

// body.style.padding = "20px";
body.style.display = "grid";
body.style.gridTemplateColumns = "1fr 1fr";
body.style.gap = "1rem";

//? 1) Helper function - create an element, apply styles and optional text
const createElem = (tag, styles = {}, text = "") => {
  const elem = document.createElement(tag);
  Object.assign(elem.style, styles);
  if (text) elem.textContent = text;
  return elem;
};

//? 2) State managing - for filter and thumbnail selected
const state = {
  filter: "all",
  selected: null,
};

//* Colors arrays

const blue = [{}];

//*-------------- Left container Start ---------------------//
let leftContainer = createElem("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "10px",
});

// Feature Image - Container
let featureImage = createElem("div", {
  width: "500px",
  height: "300px",
  backgroundColor: "gray",
});

// Thumbnails - Container
let thumbnailImages = createElem("div", {
  width: "500px",
  height: "450px",
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
});

// let list = 12;
// for (let i = 1; i <= list; i++) {
//   let colorElement = document.createElement("div");
//   colorElement.style.cssText =
//     "width: 100px; height: 100px; background-color: red;";

//   thumbnailImages.append(colorElement);
// }

//? add to left container
leftContainer.append(featureImage, thumbnailImages);

//*-------------- Left container End ---------------------//

//*-------------- Right container Start ---------------------//
let rightContainer = createElem("div");

// Buttons Container
let btnContainer = createElem("div", {
  display: "flex",
  gap: "1rem",
  marginTop: "50px",
});

let buttonStyles = {
  fontSize: "20px",
  padding: "5px 10px",
  cursor: "pointer",
};

let allBtn = createElem("button", buttonStyles, "ALL");
let redBtn = createElem("button", buttonStyles, "RED");
let greenBtn = createElem("button", buttonStyles, "GREEN");
let blueBtn = createElem("button", buttonStyles, "BLUE");

btnContainer.append(allBtn, redBtn, greenBtn, blueBtn);

// Dropdown menu - Container
let select = createElem("select", {
  padding: "10px 15px 10px 5px",
  marginTop: "100px",
  fontSize: "20px",
});

let allOption = createElem("option", {}, "ALL");
allOption.value = "all";
let redOption = createElem("option", {}, "RED");
redOption.value = "red";
let greenOption = createElem("option", {}, "GREEN");
greenOption.value = "green";
let blueOption = createElem("option", {}, "BLUE");
blueOption.value = "blue";

// append options 
select.append(allOption, redOption, greenOption, blueOption);

//? add to right container
rightContainer.append(btnContainer, select);

//*--------------Right container End---------------------//

// adding both container to body
body.append(leftContainer, rightContainer);
