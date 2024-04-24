document.addEventListener("DOMContentLoaded", function() {
    // Get all filter links
    const filterLinks = document.querySelectorAll('.filter__link');

    // Get the gallery grid container
    const galleryGridContainer = document.querySelector('.gallery-grid-two');

    // Get the certification grid item
    const certificationItem = document.querySelector('.category-Certifications');

    // Function to handle filtering and styling
    function handleFiltering(filterValue) {
        // Remove 'active' class from all filter links
        filterLinks.forEach(function(item) {
            item.parentElement.classList.remove('active');
        });

        // Add 'active' class to the clicked filter link
        this.parentElement.classList.add('active');

        // Get all grid items
        const gridItems = document.querySelectorAll('.gallery-grid__item');

        // If filterValue is '*', show all grid items, else filter by category
        gridItems.forEach(function(item) {
            if (filterValue === '*' || item.classList.contains(filterValue.slice(1))) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Adjust the height of the gallery grid container for Certifications
        if (filterValue === '.category-Certifications') {
            galleryGridContainer.style.height = '380px';
            certificationItem.style.top = '0px';
        } else if (filterValue === '.category-Project') {
            galleryGridContainer.style.height = '950px';
        } else {
            galleryGridContainer.style.height = '1330px';
            certificationItem.style.top = '960.83px';
        }
    }

    // Add click event listeners to each filter link
    filterLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the data-filter value of the clicked filter link
            const filterValue = this.parentElement.getAttribute('data-filter');

            // Handle filtering and styling
            handleFiltering.call(this, filterValue);
        });
    });

    // Get all images
    const images = document.querySelectorAll('.gallery-grid__image');

    // Modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    // Dark overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    modal.appendChild(overlay);

    // Loop through each image and attach click event
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            const modalImage = document.createElement('img');
            modalImage.src = this.src;
            modalImage.classList.add('modal-image');
            modal.innerHTML = '';
            modal.appendChild(modalImage);
            modal.style.display = 'flex'; // Change display to flex
        });
    });

    // Close modal when clicked outside the image
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Prevent modal from closing when clicked on the image itself
    modal.children[0].addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Show active category when page loads
    const activeCategory = document.querySelector('.filter__item.active .filter__link').getAttribute('data-filter');
    handleFiltering.call(document.querySelector('.filter__item.active .filter__link'), activeCategory);
});

