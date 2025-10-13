// Sanity Old Age Home - Preloader
// Add this script to all pages to show a consistent preloader UX before content loads

document.addEventListener('DOMContentLoaded', function() {
  // Create preloader element
  var preloader = document.createElement('div');
  preloader.id = 'sanity-preloader';
  preloader.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-95">
      <div class="flex flex-col items-center">
        <img src="../img/sanity-logo.svg" alt="Sanity Logo" class="h-16 w-16 mb-4 animate-bounce">
        <div class="loader mb-2"></div>
        <span class="text-brown-900 text-xl font-bold tracking-wide">Loading Sanity...</span>
      </div>
    </div>
  `;
  document.body.appendChild(preloader);

  // Remove preloader after window load
  window.addEventListener('load', function() {
    setTimeout(function() {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(function() {
        preloader.remove();
      }, 400);
    }, 400); // Show for at least 400ms
  });
});
