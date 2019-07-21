
document.addEventListener("DOMContentLoaded", function () {
  var div = d3
    .select('#unicorn02')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);
  d3.selectAll("g#circle circle").nodes().forEach(node => {
    d3.select(node).on("mouseover", function (d) {
      this.setAttribute('style', 'fill-opacity:.25;');
      div
        .transition()
        .duration(200)
        .style('opacity', 0.9);
      var name = this.getAttribute('data');
      // var nDomin = data[0];
      // var nDate = data[1];
      // var nodeData = domainData[nDomin];
      // var country = nodeData['country'];
      // var type = nodeData['type'];
      // var ranking = nodeData[nDate];
      // var text =
      //   nDomin +
      //   '<br>' +
      //   country +
      //   '<br>' +
      //   type +
      //   '<br>' +
      //   nDate +
      //   ' ranking: ' +
      //   ranking;
      div
        .html(name)
        .style('left', d3.event.pageX + 5 + 'px')
        .style('top', d3.event.pageY - 20 + 'px');
    })
      .on('mouseout', function (d) {
        this.setAttribute('style', 'fill-opacity:1;');
        div
          .transition()
          .duration(500)
          .style('opacity', 0);
      });
  })
});

// document.querySelectorAll("svg > g").forEach(e => { id = e.getAttribute("id"); if (id.includes("age") || id.includes("edu" )) { e.setAttribute("style", "opacity:0;") } })


