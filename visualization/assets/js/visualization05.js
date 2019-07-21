
var IDS = ["age-overall", "age-estab", "age-issue", "age-now", "edu-cs", "edu-mba", "edu-higher", "edu-basic"]
document.addEventListener("DOMContentLoaded", function () {
  list = []
  document.querySelectorAll("g#option>path").forEach(path => {  
    path.addEventListener("click",()=>{
      IDS.forEach(id => {
        var node = document.querySelector("path#" + id + "_o");
        var cl = node.getAttribute("class");
        if(cl=="selected"){
          node.setAttribute("class","st101");
          document.querySelector("g#"+id+"_main").setAttribute("style","opacity:0;")
        }
      }); 
      path.setAttribute("class", "selected");
      document.querySelector("g#" + path.getAttribute("id").split("_")[0]+"_main").setAttribute("style","opacity:1;")
    })
  })
});
