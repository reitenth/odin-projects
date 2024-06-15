const submit = document.querySelector("#submit");
const formBox = document.querySelector("#form-box");
const board = document.querySelector(".board");
const message = document.querySelector(".message");
const clear = document.querySelector("#clear");
let click = false;
createBoard(16);

// toggle draw mode with a mouse click

document
	.querySelector("body")
	.addEventListener("click", function (enableBoard) {
		if (enableBoard.target.tagName !== "Button") {
			click = !click;
		}
	});

function createBoard(size) {
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	const numberDivs = size * size;

	for (let i = 0; i < numberDivs; i++) {
		const div = document.createElement("div");
		div.addEventListener("mouseover", changeColor);
		board.insertAdjacentElement("beforeend", div);
	}
}

submit.addEventListener("click", function getSize() {
	const size = document.querySelector("#form-box").value;
	createBoard(size);
});

clear.addEventListener("click", function clearBoard() {
	const divs = document.querySelectorAll("div");
	divs.forEach((div) => (div.style.backgroundColor = "#2e3440"));
});

function changeColor() {
	const black = document.querySelector("#black");
	const red = document.querySelector("#red");
	const blue = document.querySelector("#blue");
	const eraser = document.querySelector("#eraser");

	if (click) {
		if (black.checked) {
			this.style.backgroundColor = "black";
		} else if (red.checked) {
			this.style.backgroundColor = "red";
		} else if (blue.checked) {
			this.style.backgroundColor = "blue";
		} else if (eraser.checked) {
			this.style.backgroundColor = "#2e3440";
		}
	}
}
