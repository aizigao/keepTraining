function shape(points) {
  var color = "#4f4";
  var toggle = function () {
    if (color == "#4f4") color = "#f44";
    else color = "#4f4";
  };
  var draw = function (ctx) {
    ctx.fillStyle = color;
    ctx.beginPath();
    $.map(points, function (point, index) {
      if (index === 0) ctx.moveTo(point[0], point[1]);
      else ctx.lineTo(point[0], point[1]);
    });
    ctx.fill();
    toggle();
  };
  var clone = function (offset) {
    var newpoints = $.map(points, function (pt) {
      return [[pt[0] + offset[0], pt[1] + offset[1]]];
    });
    return shape(newpoints);
  };
  /*
   * For each line segment comprising the shape, compute whether a ray
   * originating at the point clicked and going in the -y direction
   * would intersect that segment. For symmetry, include the starting
   * point of the segment but exclude the finishing point. If the number
   * of intersections is odd, then the point is interior to the shape.
   * If a segment is vertical, assume it doesn't intersect.
   */
  var segments = [];
  $.map(points, function (point, index) {
    var x1 = point[0],
      y1 = point[1];
    var next = points[(index + 1) % points.length];
    var x2 = next[0],
      y2 = next[1];
    if (x1 != x2) {
      segments.push(function (x, y) {
        t = (x - x1) / (x2 - x1);
        return t >= 0 && t < 1 && y > t * y2 + (1 - t) * y1;
      });
    }
  });
  var interior = function (x, y) {
    var z = 0;
    $.map(segments, function (crosses) {
      if (crosses(x, y)) z++;
    });
    return z % 2 == 1;
  };
  return {
    draw: draw,
    interior: interior,
    clone: clone,
  };
}

var star = shape([
  [0.0, -50.0],
  [11.225718676699083, -15.450876230904203],
  [47.552825814757675, -15.450849718747369],
  [18.163594367043608, 5.901709564237537],
  [29.389262614623657, 40.45084971874737],
  [00, 19.098333333333333],
  [-29.38926261462365, 40.45084971874737],
  [-18.163594367043608, 5.901709564237539],
  [-47.55282581475768, -15.450849718747364],
  [-11.225718676699085, -15.450876230904202],
]);

var shapes = $.map(
  [
    [100, 100],
    [200, 100],
    [100, 200],
    [200, 200],
  ],
  star.clone
);

$(function () {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  $.map(shapes, function (s) {
    s.draw(ctx);
  });
  c.addEventListener(
    "click",
    function (evt) {
      var x = event.pageX - c.offsetLeft,
        y = event.pageY - c.offsetTop;
      $.map(shapes, function (s) {
        if (s.interior(x, y)) s.draw(ctx);
      });
    },
    false
  );
});
