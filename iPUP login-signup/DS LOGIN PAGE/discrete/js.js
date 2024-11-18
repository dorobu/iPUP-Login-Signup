document.addEventListener("DOMContentLoaded", function () {
    const placesList = document.getElementById("places");
    const placeContainers = document.querySelectorAll(".place-container");
    const contentContainer = document.getElementById("content-container");

    placesList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const containerId = event.target.dataset.container;

            // Hide all place containers
            placeContainers.forEach((container) => {
                container.style.display = "none";
            });

            // Show the selected place container
            const container = document.getElementById(containerId);
            container.style.display = "block";

            // Clear previous content
            contentContainer.innerHTML = "";
        }
    });
});
