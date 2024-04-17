// Function to open modal
function openModal(modalId, imgId, imgSrc, imgAlt, captionId) {
    var modal = document.getElementById(modalId);
    var modalImg = document.getElementById(imgId);
    var captionText = document.getElementById(captionId);

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgAlt;
}

// Function to close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to add event listener for each image
function addImageClickListener(imgId, modalId, captionId) {
    var imgElement = document.getElementById(imgId);
    imgElement.addEventListener("click", function () {
        openModal(modalId, "modalImg", this.src, this.alt, captionId);
        closeModal(modalId); // Close modal when the image is clicked
    });
}

// Function to add event listener for closing modal
function addCloseModalListener(closeIndex, modalId) {
    document.getElementsByClassName("close")[closeIndex].addEventListener("click", function () {
        closeModal(modalId);
    });
}

// Add event listeners for images
for (var i = 1; i <= 6; i++) {
    addImageClickListener("myImg" + i, "myModal" + i, "caption" + i);
}

// Add event listeners for closing modals
for (var j = 0; j < 6; j++) {
    addCloseModalListener(j, "myModal" + (j + 1));
}
