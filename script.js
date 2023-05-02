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
  
        // Append the image to the modal
        modal.appendChild(modalImage);

        
  
        // Add the modal to the document body
        document.body.appendChild(modal);
  
        // Close the modal when clicked outside the image
        modal.addEventListener('click', () => {
          modal.remove();
        });
      });
    });
  });
  