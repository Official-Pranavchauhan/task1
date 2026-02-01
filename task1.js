var box = document.getElementById("box");
var clearBtn = document.getElementById("clear");

var drawing = false;
var line;

box.onmousedown = function(e) {
  drawing = true;

  line = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );

  line.setAttribute("points", e.clientX + "," + e.clientY);
  line.setAttribute("stroke", "black");
  line.setAttribute("fill", "none");

  box.appendChild(line);
};

box.onmousemove = function(e) {
  if (drawing) {
    var p = line.getAttribute("points");
    line.setAttribute("points", p + " " + e.clientX + "," + e.clientY);
  }
};

box.onmouseup = function() {
  drawing = false;
};

clearBtn.onclick = function() {
  box.innerHTML = "";
};
