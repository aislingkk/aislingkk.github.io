document.querySelector('body').setAttribute('style', 'background:#f7f7f7;');
document.addEventListener('DOMContentLoaded', function() {
  var data = readUnicornCsvData('/assets/csv/finalunicorn.csv');
  var div = d3
    .select('#unicorn02')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);
  d3.selectAll('g#circle circle')
    .nodes()
    .forEach(node => {
      d3.select(node)
        .on('mouseover', function(d) {
          this.setAttribute('style', 'fill-opacity:.25;');
          div
            .transition()
            .duration(200)
            .style('opacity', 0.9);
          var name = this.getAttribute('data');
          var entry = data[name];
          var text =
            name +
            '<br>Latest valuation(100 million$): ' +
            entry.latest_valuation +
            '<br> Founding Time: ' +
            entry.founding_time;
          // '<br> Round:' +
          // entry.round +
          // '<br> Size: ' +
          // entry.size;
          div
            .html(text)
            .style('left', d3.event.pageX + 5 + 'px')
            .style('top', d3.event.pageY - 20 + 'px');
        })
        .on('mouseout', function(d) {
          this.setAttribute('style', 'fill-opacity:1;');
          div
            .transition()
            .duration(500)
            .style('opacity', 0);
        });
    });
});

// document.querySelectorAll("svg > g").forEach(e => { id = e.getAttribute("id"); if (id.includes("age") || id.includes("edu" )) { e.setAttribute("style", "opacity:0;") } })
