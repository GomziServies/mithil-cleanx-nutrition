document.addEventListener("DOMContentLoaded", function () {
	var authCard = document.getElementById("auth-card");
	var authHeading = document.getElementById("auth-heading");
	var authStatus = document.getElementById("auth-status");
	var authResult = document.getElementById("auth-result");

	if (!authCard || !authHeading || !authStatus || !authResult) {
		return;
	}

	window.setTimeout(function () {
		authCard.classList.remove("is-loading");
		authCard.classList.add("is-animated");
	}, 250);

	window.setTimeout(function () {
		authHeading.textContent = "Product authentication complete";
		authStatus.textContent = "Authentication successful";
		authCard.classList.add("is-complete");
	}, 4500);
});
