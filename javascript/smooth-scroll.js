document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const targetId = this.getAttribute("href").substr(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const yOffset = targetElement.getBoundingClientRect().top;
			const initialYOffset = window.pageYOffset;
			const duration = 1300; // You can adjust the duration as needed
			const startTime = performance.now();

			function step(currentTime) {
				const timeElapsed = currentTime - startTime;
				window.scrollTo(
					0,
					easeOut(timeElapsed, initialYOffset, yOffset, duration)
				);
				if (timeElapsed < duration) {
					requestAnimationFrame(step);
				}
			}

			function easeOut(t, b, c, d) {
				t /= d;
				return -c * t * (t - 2) + b;
			}

			requestAnimationFrame(step);
		}
	});
});
