document.querySelector('body').setAttribute('style', 'background:#F0F0F2;');
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('svg').setAttribute('style', 'width: 310%;');
  document.querySelector('#world-all').scrollLeft = 10000;
});

// document.querySelectorAll("svg > g").forEach(e => { id = e.getAttribute("id"); if (id.includes("age") || id.includes("edu" )) { e.setAttribute("style", "opacity:0;") } })