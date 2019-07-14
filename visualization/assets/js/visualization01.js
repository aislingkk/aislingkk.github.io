
var MIN_WIDTH = 80;
function getAllRects(svg) {
  var reactMatrix = {}
  svg.selectAll("rect").nodes().forEach(function (node) {
    if (parseInt(node.getAttribute("width")) >= MIN_WIDTH) {
      var x = node.getAttribute("x");
      var y = node.getAttribute("y");
      if (y in reactMatrix) {
        reactMatrix[y][x] = node;
      }
      else {
        reactMatrix[y] = {}
        reactMatrix[y][x] = node;
      }
    }
  })

  return reactMatrix;
}

function getDomainListInSvg(svg) {
  var domainList = []
  svg.selectAll("#text2 > text").nodes().forEach(n => {
    domainList.push(n.innerHTML);
  })
  return domainList;

}

var xPositionToYearMap = ["2019-01", "2018-05", "2018-01", "2017-04", "2016-12", "2016-03", "2015-10", "2015-03", "2014-12", "2014-06", "2014-02", "2013-05", "2012-11"];


document.addEventListener("DOMContentLoaded", function () {
  var btn1 = document.getElementById("btn-alexaranking01");
  var btn2 = document.getElementById("btn-alexaranking02");
  var svg1 = document.getElementById("svg-alexaranking01");
  var svg2 = document.getElementById("svg-alexaranking02");
  btn1.onclick = function () {
    svg1.style.display = "";
    svg2.style.display = "none"
  };

  btn2.onclick = function () {
    svg1.style.display = "none";
    svg2.style.display = ""
  };
  var div = d3.select("#visualization01").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  function readCsvData() {
    var domainData = {}
    d3.csv("/assets/csv/alexa.csv").then(function (data) {
      data.forEach(element => {
        domainData[element.domain] = element;
      });
    })
    return domainData;
  }
  var domainData = readCsvData();

  var svg = d3.select("#svg-alexaranking01 > svg");
  var rects = getAllRects(svg);
  var domainList = getDomainListInSvg(svg);



  function addEventsToRectNodes(rects, domainList, domainData) {
    var sortedYKeys = Object.keys(rects).sort((a, b) => {
      return parseFloat(a) - parseFloat(b);
    });
    // console.log(sortedYKeys);
    var y = 0;
    sortedYKeys.forEach(yKey => {
      var sortedXKeys = Object.keys(rects[yKey]).sort((a, b) => {
        return parseFloat(a) - parseFloat(b);
      });
      var x = 0;

      sortedXKeys.forEach(xKey => {
        var rect = rects[yKey][xKey];
        var domain = domainList[y];
        var date = xPositionToYearMap[x];
        d3.select(rect).attr("data", domain + ";" + date).on("mouseover", function (d) {
          console.log(this)
          this.setAttribute("style", "fill-opacity:.25;");
          div.transition()
            .duration(200)
            .style("opacity", .9);
          var data = this.getAttribute("data").split(";")
          var nDomin = data[0];
          var nDate = data[1];
          var nodeData = domainData[nDomin];
          var country = nodeData["country"];
          var type = nodeData["type"];
          var ranking = nodeData[nDate];
          var text = nDomin + "<br>" + country + "<br>" + type + "<br>" + nDate + " ranking: " + ranking;
          div.html(text)
            .style("left", (d3.event.pageX + 5)  + "px")
            .style("top", (d3.event.pageY - 20) + "px");
        })
          .on("mouseout", function (d) {
            this.setAttribute("style","fill-opacity:1;");
            div.transition()
              .duration(500)
              .style("opacity", 0);
          });

        x += 1;
      });
      y += 1;

    })

  }


  addEventsToRectNodes(rects, domainList, domainData);

  var d3svg2 = d3.select("#svg-alexaranking02 > svg");
  var rects2 = getAllRects(d3svg2);
  var domainList2 = getDomainListInSvg(d3svg2);
  addEventsToRectNodes(rects2, domainList2, domainData);


});