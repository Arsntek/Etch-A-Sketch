//Call to initialize first 16x16 grid
const grid = document.querySelector(".grid");
initialGrid();

const btnSingle = document.querySelector("#single");
const btnRainbow = document.querySelector("#rainbow");
const btnEraser = document.querySelector("#eraser");
const btnShader = document.querySelector("#shader");
const btnSize = document.querySelector("#size");
const btnClear = document.querySelector("#clear");
const colorPicked = document.querySelector("#color");
let insideGrid = document.querySelectorAll(".insideGrid");

function initialGrid() {
  let initialDivAmount = 16;
  let initialDivSide =
    parseInt(window.getComputedStyle(grid).getPropertyValue("height")) /
    initialDivAmount;
  initialDivSide = initialDivSide + "px";
  for (x = 0; x < initialDivAmount * initialDivAmount; x++) {
    let initialDiv = document.createElement("div");
    initialDiv.classList.add("insideGrid");
    initialDiv.style.width = initialDivSide;
    initialDiv.style.height = initialDivSide;
    initialDiv.style.backgroundColor = "#ffffff";
    grid.appendChild(initialDiv);
  }
}

function updateGrid() {
  do {
    num = parseInt(
      window.prompt(
        "Choose the new grid size. It must be a number from 4 to 100",
      ),
    );
    numSide =
      parseInt(window.getComputedStyle(grid).getPropertyValue("height")) / num;
    numSide = numSide + "px";
    if (num < 4 || num > 100) {
      alert("It must be a number from 4 to 100");
    } else {
      grid.replaceChildren();
      for (x = 0; x < num * num; x++) {
        let initialDiv = document.createElement("div");
        initialDiv.classList.add("insideGrid");
        initialDiv.style.width = numSide;
        initialDiv.style.height = numSide;
        initialDiv.style.backgroundColor = "#ffffff";
        grid.appendChild(initialDiv);
      }
    }
  } while (num < 4 || num > 100);
}

function singleColorGrid() {
  let insideGrid = document.querySelectorAll(".insideGrid");
  let colorUsed = colorPicked.value;
  insideGrid.forEach((div) => {
    div.addEventListener("mouseover", function() {
      div.style.backgroundColor = colorUsed;
    });
  });
}

function clearGrid() {
  let insideGrid = document.querySelectorAll(".insideGrid");
  insideGrid.forEach((div) => {
    div.style.backgroundColor = "#ffffff";
  });
}

btnSize.addEventListener("click", updateGrid);
btnClear.addEventListener("click", clearGrid);
btnSingle.addEventListener("click", singleColorGrid);
