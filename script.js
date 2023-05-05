document.addEventListener('DOMContentLoaded', () => {
    // Get all the images
    const images = document.querySelectorAll('.image');
  
    // Add a click event listener to each image
    images.forEach(image => {
      image.addEventListener('click', () => {
        // Create a modal element
        const modal = document.createElement('div');
        modal.className = 'modal';
  
        // Create an image element inside the modal
        const modalImage = document.createElement('img');
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalImage.className = 'modal-image';
        // Create a close button
      const closeButton = document.createElement('button');
      closeButton.className = 'close-button';
      closeButton.innerHTML = 'X';
  
        // Append the image to the modal
        modal.appendChild(modalImage);

        modal.appendChild(closeButton);
  
        // Add the modal to the document body
        document.body.appendChild(modal);
  
        // Close the modal when clicked outside the image
        modal.addEventListener('click', (event) => {
          if (event.target === modal || event.target === closeButton) {
          modal.remove();
        }
        });
      });
    });
  });
  
function ReadMore () {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
}
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save the user's preference in local storage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
}

// Check user's preference from local storage on page load
const isDarkMode = localStorage.getItem('dark-mode') === 'true';
if (isDarkMode) {
  document.body.classList.add('dark-mode');
}