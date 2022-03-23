var box2 = document.getElementById("box2");
const box1 = document.getElementById("box1");
const coordinates = [];

// box2.addEventListener(
// 	"touchmove",
// 	function (event) {
// 		var borderLeft = 0,
// 			borderRight = 300 - 70,
// 			borderTop = 0,
// 			borderBottom = 300 - 70;

// 		// wylaczamy scrollowanie itp.
// 		event.preventDefault();

// 		// tylko dla pojedynczego palca
// 		if (event.targetTouches.length == 1) {
// 			var touch = event.targetTouches[0];

// 			// ustawiamy odpowiednie style
// 			if (touch.pageX > borderLeft && touch.pageX < borderRight) {
// 				this.style.left = touch.pageX + "px";
// 			}
// 			if (touch.pageY > borderTop && touch.pageY < borderBottom) {
// 				this.style.top = touch.pageY + "px";
// 			}
// 		}
// 	},
// 	false
// );

box1.addEventListener("touchstart", (e) => {
	coordinates.splice(0, coordinates.length);
	checkTouchStart(e);
});

box1.addEventListener("touchend", (e) => {
	checkTouchEnd(e);
	console.log(coordinates);
	const direction = setDirection();
	moveInDirection(direction);
});

function moveInDirection(direction) {
	switch (direction) {
		case "up":
			{
				console.log("Move UP");
			}
			break;
		case "down":
			{
				console.log("Move DOWN");
			}
			break;
		case "left":
			{
				console.log("Move LEFT");
			}
			break;
		case "right":
			{
				console.log("Move RIGHT");
			}
			break;
	}
}

function checkTouchStart(e) {
	e.preventDefault();

	const x = e.touches[0].clientX;
	const y = e.touches[0].clientY;
	console.log(`xSTART = ${x} ; ySTART= ${y}`);
	coordinates.push(x, y);
}

function checkTouchEnd(e) {
	const x = e.changedTouches[0].clientX;
	const y = e.changedTouches[0].clientY;
	console.log(`xEND = ${x} ; yEND= ${y}`);
	coordinates.push(x, y);
}

function setDirection() {
	const xStart = coordinates[0];
	const yStart = coordinates[1];
	const xEnd = coordinates[2];
	const yEnd = coordinates[3];

	//Move axis X
	if (Math.abs(xStart - xEnd) > Math.abs(yStart - yEnd)) {
		console.log("ruch po X");
		if (xStart > xEnd) {
			console.log("left");
			return "left";
		} else {
			console.log("right");
			return "right";
		}
	}
	//Move axis Y
	else if (Math.abs(xStart - xEnd) < Math.abs(yStart - yEnd)) {
		console.log("ruch po Y");
		if (yStart > yEnd) {
			console.log("up");
			return "up";
		} else {
			console.log("down");
			return "down";
		}
	}
}
