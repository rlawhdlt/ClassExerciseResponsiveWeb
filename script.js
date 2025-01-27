document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior for demo
      alert(`You clicked on ${link.textContent.trim()}!`); // Fun interaction
    });
  });
  