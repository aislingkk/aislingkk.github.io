function getXYFromTranslate(element) {
  var split = element.getAttribute("transform").split(" ");
  var x = parseFloat(split[4]);
  var y = parseFloat(split[5].split(")")[0]);
  return [x, y];
}

document.addEventListener("DOMContentLoaded", function () {
  var counter = 0;

  var children = document.querySelector("g#circle").children;
  var text_positions = []
  document.querySelectorAll("g#text>text").forEach(text => {
    text_positions.push(getXYFromTranslate(text));
  })


  set1 = new Set([]);
  set2 = new Set([]);
  for (var i = 0; i < document.querySelectorAll("g#text>text").length; i++) {
    set2.add(i);
  }
  var texts = []
  document.querySelectorAll("g#text>text").forEach((text, index) => {
    text.setAttribute("id", index);
    texts.push(text.textContent);
  });
  Array.from(document.querySelector("g#circle").children).forEach(circle => {
    var cx = parseFloat(circle.getAttribute("cx"));
    var cy = parseFloat(circle.getAttribute("cy"));
    var distance = Number.MAX_VALUE;
    var index = 0;
    var i = 0;
    text_positions.forEach(position => {
      var x = position[0];
      var y = position[1];
      var currentDis = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2))
      // console.log(currentDis,distance)
      if (distance > currentDis) {
        index = i;
        distance = currentDis;
      }
      i++;
    })


    circle.setAttribute("data", index);
    circle.addEventListener("mouseover", (event) => {
      // console.log("hover")
      console.log(event)
      var id = parseInt(circle.getAttribute("data"));
      text = document.querySelectorAll("g#text>text")[id];
      console.log(text)
      text.setAttribute("style", "")
    })
    set1.add(index);
    circle.setAttribute("text", texts[index]);


  })
  var difference = new Set([...set2].filter(x => !set1.has(x)));
  for (let i of difference) {
    console.log(i, texts[i])

  }

});

// document.querySelectorAll("svg > g").forEach(e => { id = e.getAttribute("id"); if (id.includes("age") || id.includes("edu" )) { e.setAttribute("style", "opacity:0;") } })


