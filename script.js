var box2 = document.getElementById("box2");

box2.addEventListener(
	"touchmove",
	function (event) {
		var borderLeft = 0,
			borderRight = 300 - 70,
			borderTop = 0,
			borderBottom = 300 - 70;

		// wylaczamy scrollowanie itp.
		event.preventDefault();

		// tylko dla pojedynczego palca
		if (event.targetTouches.length == 1) {
			var touch = event.targetTouches[0];
			console.log(event);

			// ustawiamy odpowiednie style
			if (touch.pageX > borderLeft && touch.pageX < borderRight) {
				this.style.left = touch.pageX + "px";
			}
			if (touch.pageY > borderTop && touch.pageY < borderBottom) {
				this.style.top = touch.pageY + "px";
			}
		}
	},
	false
);
