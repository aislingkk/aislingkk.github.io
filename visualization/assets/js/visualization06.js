document.querySelector('body').setAttribute('style', 'background:#f7f7f7;');
document.addEventListener('DOMContentLoaded', function() {
  var data = readUnicornCsvData('/assets/csv/finalunicorn.csv');

  var div = d3
    .select('#unicorn')
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
          var type = entry.type;
          var location = entry.where;
          var latest_valuation = entry.latest_valuation;
          var founding_time = entry.founding_time;

          var text =
            name +
            '<br>' +
            type +
            '<br>Location: ' +
            location +
            '<br>Latest valuation(100 million$): ' +
            latest_valuation +
            '<br> Founding Time: ' +
            founding_time;
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
