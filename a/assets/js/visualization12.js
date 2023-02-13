// document.querySelector('body').setAttribute('style', 'background:#2B2B35;');
var svg = document.querySelector('svg');
var style = svg.getAttribute('style');
svg.setAttribute('style', style + 'display: block;margin: auto;');
document.addEventListener('DOMContentLoaded', function() {
  // Don't use window.onLoad like this in production, because it can only listen to one function.

  // Expose to window namespase for testing purposes
  window.zoomTiger = svgPanZoom('svg', {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 1,
    maxZoom: 50

    // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
  });
    window.zoomTiger.zoomBy(5);
});

// document.querySelectorAll("svg > g").forEach(e => { id = e.getAttribute("id"); if (id.includes("age") || id.includes("edu" )) { e.setAttribute("style", "opacity:0;") } })
