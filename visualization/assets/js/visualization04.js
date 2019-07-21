function addMouseEvent(node, pint_to) {
  node.addEventListener("mouseover", () => {
    if (node.parentElement.getAttribute("style") == "opacity:1;") {
      document.querySelector("g#" + pint_to).setAttribute("style", "opacity:1;");
    }
  })
  node.addEventListener("mouseout", () => { document.querySelector("g#" + pint_to).setAttribute("style", "opacity:0;"); })
}

document.addEventListener("DOMContentLoaded", function () {
  var OPTION_TO_LAYER_ID_MAP = ["issuecircle", "maxcircle", "mincircle", "arrow", "foundation", "totalcircle"];
  var TEXT = ["issuetext", "maxtext", "mintext", "totaltext"]
  var counter = 0;
  document.querySelectorAll("svg #option  path").forEach(path => {
    path.setAttribute("class", "st58");
    path.setAttribute("data", OPTION_TO_LAYER_ID_MAP[counter]);
    path.addEventListener('click', () => {
      var point_to = path.getAttribute("data");
      var point_to_node = document.querySelector("#" + point_to);
      if (path.getAttribute("class") == "st58") {
        path.setAttribute("class", "st59");
        point_to_node.setAttribute("style", "opacity:1;")
      }
      else {
        path.setAttribute("class", "st58");
        point_to_node.setAttribute("style", "opacity:0;")
      }
    })
    counter += 1;
  })
  counter = 0;
  document.querySelectorAll("g#rhide>line").forEach(node => {
    node.setAttribute("data", counter);
    counter++;
    node.addEventListener("mouseover", () => {
      var index = parseInt(node.getAttribute("data"));
      document.querySelectorAll("#rshow > g")[index].children[0].setAttribute("style", "stroke-opacity:1;");
      var pathes = document.querySelectorAll("#rshow > g")[index].children[1].children;
      for (let i = 0; i < pathes.length; i++) {
        pathes[i].setAttribute("style", "fill-opacity:1");
      }
    });
    node.addEventListener("mouseout", () => {
      var index = parseInt(node.getAttribute("data"));
      setTimeout(function () {
        document.querySelectorAll("#rshow > g")[index].children[0].setAttribute("style", "stroke-opacity:0;");
        var pathes = document.querySelectorAll("#rshow > g")[index].children[1].children;
        for (let i = 0; i < pathes.length; i++) {
          pathes[i].setAttribute("style", "fill-opacity:0");
        }
      })
    }, 2000);

  })

  counter = 0;
  document.querySelectorAll("g#chide>circle").forEach(node => {
    node.setAttribute("data", counter);
    counter++;
    node.addEventListener("mouseover", () => {
      var index = parseInt(node.getAttribute("data"));
      document.querySelectorAll("g#cshow>circle")[index].setAttribute("style", "stroke-opacity:1;");

    })

    node.addEventListener("mouseout", () => {
      var index = parseInt(node.getAttribute("data"));
      document.querySelectorAll("g#cshow>circle")[index].setAttribute("style", "stroke-opacity:0;");

    })



  })


  document.querySelectorAll("g#issuecircle>circle").forEach(node => { addMouseEvent(node, "issuetext"); })
  document.querySelectorAll("g#maxcircle>circle").forEach(node => { addMouseEvent(node, "maxtext"); })
  document.querySelectorAll("g#mincircle>circle").forEach(node => { addMouseEvent(node, "mintext"); })
  document.querySelectorAll("g#totalcircle>circle").forEach(node => { addMouseEvent(node, "totaltext"); })
});

