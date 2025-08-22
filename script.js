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

//* Color data arrays

const blueColors = [
  { colorName: "blue", label: "1/5 - BLUE", bgColor: "#3fb0cc" },
  { colorName: "blue", label: "2/5 - BLUE", bgColor: "#3f96cb" },
  { colorName: "blue", label: "3/5 - BLUE", bgColor: "#3e70cb" },
  { colorName: "blue", label: "4/5 - BLUE", bgColor: "#1928fe" },
  { colorName: "blue", label: "5/5 - BLUE", bgColor: "#00a8f2" },
];

const redColors = [
  { colorName: "red", label: "1/3 - RED", bgColor: "#eb1c24" },
  { colorName: "red", label: "2/3 - RED", bgColor: "#88001b" },
  { colorName: "red", label: "3/3 - RED", bgColor: "#fe3a60" },
];

const greenColors = [
  { colorName: "green", label: "1/4 - GREEN", bgColor: "#e0fe00" },
  { colorName: "green", label: "2/4 - GREEN", bgColor: "#ccfe00" },
  { colorName: "green", label: "3/4 - GREEN", bgColor: "#6efe00" },
  { colorName: "green", label: "4/4 - GREEN", bgColor: "#00c438" },
];

// All colors merge array
const allColorsArray = [...blueColors, ...redColors, ...greenColors];


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
