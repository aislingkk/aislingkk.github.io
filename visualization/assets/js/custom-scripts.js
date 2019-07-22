// This is Javascript code to make the example in question02 work, fell free to remove this when you start working on your project
$(document).ready(function () {
  $('.bubble').on('click', function (event) {
    event.stopPropagation();
    let listIndex = $(event.currentTarget).index() + 1;

    $('.label').removeClass('is-visible');
    $('.label:nth-child(' + listIndex + ')').addClass('is-visible');
  });

  $(':not(.bubble)').on('click', function (event) {
    // console.log('event fired!');
    $('.label').removeClass('is-visible');
  });

  $('.legend__item')
    .on('mouseenter', function (event) {
      // console.log($(event.currentTarget).attr("data-area"));
      let area = $(event.currentTarget).attr('data-area');

      $('.label').removeClass('is-visible');

      $('.legend__item').addClass('is-out-focus');
      $(event.currentTarget).removeClass('is-out-focus');

      $('.bubble').addClass('is-out-focus');
      $('.' + area).removeClass('is-out-focus');
    })
    .on('mouseleave', function (event) {
      $('.bubble').removeClass('is-out-focus');
      $('.legend__item').removeClass('is-out-focus');
    });

  if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
    for (var i = 1; i < 13; i++) {
      var id = "";
      if (i < 10) {
        id = "#question0" + i;
      }
      else {
        id = "#question" + i;
      }
      // document.querySelectorAll(id).forEach(node => {
        
      //   var a = document.createElement("a");
      //   a.setAttribute("xlink:href","/"+id.split("#")[1]+".html");
      //   a.setAttribute("target", "_blank");
      //   node.append(a);
      //   // console.log(node)
      //   node.children[2].appendChild(node.childNodes[0]);
      //   node.children[2].appendChild(node.childNodes[1]);
      //   console.log(node.childNodes[0])
      //   console.log(node.childNodes[1])

      // })
    }
    
  }
});

function readUnicornCsvData(path) {
  var datadic = {};
  d3.csv(path).then(function (data) {
    data.forEach(element => {
      datadic[element.company] = element;
    });
  });
  return datadic;
}