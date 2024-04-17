function openModal(modalId, imgId, imgSrc, imgAlt, captionId) {
    var modal = document.getElementById(modalId);
    var modalImg = document.getElementById(imgId);
    var captionText = document.getElementById(captionId);

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgAlt;
}


function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Event listeners for clicking on images to open modals
document.getElementById("myImg").addEventListener("click", function () {
    openModal("myModal", "modalImg", this.src, this.alt, "caption");
});

// Add event listeners to close modals when clicking on modal images
document.getElementById("modalImg").addEventListener("click", function () {
    closeModal("myModal");
});

document.getElementById("modalImg2").addEventListener("click", function () {
    closeModal("myModal2");
});

document.getElementById("modalImg3").addEventListener("click", function () {
    closeModal("myModal3");
});

document.getElementById("modalImg4").addEventListener("click", function () {
    closeModal("myModal4");
});

document.getElementById("modalImg5").addEventListener("click", function () {
    closeModal("myModal5");
});

document.getElementById("modalImg6").addEventListener("click", function () {
    closeModal("myModal6");
});

// Event listeners for closing the modals
document.getElementsByClassName("close")[0].addEventListener("click", function () {
    closeModal("myModal");
});

document.getElementsByClassName("close")[1].addEventListener("click", function () {
    closeModal("myModal2");
});

document.getElementsByClassName("close")[2].addEventListener("click", function () {
    closeModal("myModal3");
});

document.getElementsByClassName("close")[3].addEventListener("click", function () {
    closeModal("myModal4");
});

document.getElementsByClassName("close")[4].addEventListener("click", function () {
    closeModal("myModal5");
});

document.getElementsByClassName("close")[5].addEventListener("click", function () {
    closeModal("myModal6");
});

