document.querySelector('body').setAttribute('style', 'background:#2B2B35;');
document.addEventListener('DOMContentLoaded', function () {

  // Don't use window.onLoad like this in production, because it can only listen to one function.

  // Expose to window namespase for testing purposes
  window.zoomTiger = svgPanZoom('svg', {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 1
    // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
  });

});

// document.querySelectorAll("svg > g").forEach(e => { id = e.getAttribute("id"); if (id.includes("age") || id.includes("edu" )) { e.setAttribute("style", "opacity:0;") } })
