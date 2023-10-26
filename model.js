// Get all "Read more" buttons
const readMoreButtons = document.querySelectorAll('.work-box button');

// Get the modal and its components
const modal = document.getElementById('myModal');
const modeltitle = document.getElementById('dtitle')
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const close = document.querySelector('.close');

// Attach a click event to each "Read more" button
readMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Set the modal content based on the clicked button
    const title = button.previousElementSibling.textContent;
    const imageSrc = document.querySelectorAll('.work-box img')[index].getAttribute('src');
    const description = button.getAttribute('data-description');
    
    modeltitle.innerHTML = title;
    modalImage.src = imageSrc;
    modalDescription.innerHTML = description;

    // Display the modal
    modal.style.display = 'block';
  });
});

// Close the modal when the close button is clicked
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
