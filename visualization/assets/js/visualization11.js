// document.querySelector('body').setAttribute('style', 'background:#2B2B35;');
var svg = document.querySelector('svg');
var style = svg.getAttribute('style');
svg.setAttribute('style', style + 'display: block;margin: auto;');
document.addEventListener('DOMContentLoaded', function() {
  // Expose to window namespase for testing purposes
  window.zoomTiger = svgPanZoom('svg', {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 1,
    maxZoom: 50
  });
});
