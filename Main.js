

const buttons = document.querySelectorAll('.navbar button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove 'selected-button' ID from all buttons
    buttons.forEach(btn => {
      if (btn.id === 'selected-button') {
        btn.removeAttribute('id');
      }
    });

    // Add 'selected-button' ID to the clicked button
    this.id = 'selected-button';
  });
});


