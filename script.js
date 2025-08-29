// Simple JS that changes content in main on clicking nav links

const mainContent = document.getElementById('main-content');

document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault();
  mainContent.innerHTML = '<p>This is a simple HTML page example.</p>';
});

document.getElementById('about-link').addEventListener('click', function(event) {
  event.preventDefault();
  mainContent.innerHTML = '<p>About: This website demonstrates basic HTML5 structure using semantic elements like header, nav, main, and footer.</p>';
});
