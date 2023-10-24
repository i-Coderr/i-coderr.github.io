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

// Event listeners for clicking on images
document.getElementById("myImg").addEventListener("click", function () {
    openModal("myModal", "modalImg", this.src, this.alt, "caption");
});

document.getElementById("myImg2").addEventListener("click", function () {
    openModal("myModal2", "modalImg2", this.src, this.alt, "caption2");
});

document.getElementById("myImg3").addEventListener("click", function () {
    openModal("myModal3", "modalImg3", this.src, this.alt, "caption3");
});

document.getElementById("myImg4").addEventListener("click", function () {
    openModal("myModal4", "modalImg4", this.src, this.alt, "caption4");
});

document.getElementById("myImg5").addEventListener("click", function () {
    openModal("myModal5", "modalImg5", this.src, this.alt, "caption5");
});

document.getElementById("myImg6").addEventListener("click", function () {
    openModal("myModal6", "modalImg6", this.src, this.alt, "caption6");
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
