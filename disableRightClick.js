// Disable right-click on images to prevent context menu
document.addEventListener('contextmenu', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});


// Disable right-click on links to prevent context menu
document.addEventListener('contextmenu', function (e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
  }
});
