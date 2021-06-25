function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() => {
  var draw = SVG().addTo("#test").size(300, 300).viewbox("0 0 300 300");

  var rect = draw.rect(100, 100).attr({ fill: "#f06" });
  rect.radius(10);
  rect.data("dfsdf", "ddddata");
  rect.remember("oldBBox", "xxxxx");

  window.rect = rect;
  console.log(rect.bbox());

  var circle = draw.circle(100).fill("pink").stroke({ width: 2, color: "red" });
  circle.move(120, 120);
  circle.radius(20);

  var group = draw.group();
  group.add(rect);
  group.path("M10,20L30,40").attr({ stroke: "#000" });

  var symbol = draw.symbol();
  symbol.rect(100, 100).fill("#f09");

  var use = draw.use(symbol).move(200, 200);

  var link = draw.link("http://svgdotjs.github.io/");
  var rect = link.rect(100, 100).move(150, 30);
  link.to("http://baidu.com");
  link.target("_blank");

  // fragment没有反应
  // const Fragment = SVG.Fragment;

  // const frag = new Fragment();
  // frag.rect(100, 100).attr({ fill: "blue" });
  // frag.circle(100, 100);

  // draw.add(frag); // will add rect and circle

  var element = draw.element("title", { id: "myId" });
  element.words("dddddddddddddddddddddddddddddddddddddddddddddddddddd");

  var line = draw.line(0, 0, 100, 150).stroke({ width: 1 });
  var polyline = draw
    .polyline([
      [0, 0],
      [100, 50],
      [50, 100],
    ])
    .fill("none")
    .stroke({ width: 3, color: "blue" });

  var polygon = draw
    .polygon("0,0 100,50 50,100")
    .fill("yellow")
    .stroke({ width: 1 })
    .move(150, 169);

  var path = draw
    .path("M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z")
    .fill("none")
    .stroke({ color: "black" })
    .move(0, 200);
  //   .text("test test sete");

  path.text("testtest");

  var text = draw.text("This is just the start, ");

  text.build(true); // enables build mode

  var tspan = text.tspan("something pink in the middle ").fill("#00ff97");
  text.plain("and again boring at the end.");

  text.build(false); // disables build mode

  tspan.animate("5s").fill("#f06");

  var text = draw
    .text(function (add) {
      add.tspan("Lorem ipsum dolor sit amet ").newLine();
      add.tspan("consectetur").fill("#f06");
      add.tspan(".");
      add.tspan("Cras sodales imperdiet auctor.").newLine().dx(20);
      add.tspan("Nunc ultrices lectus at erat");
      add.tspan("dictum pharetra elementum ante").newLine();
    })
    .amove(0, 30);

  var image = draw
    .image("https://dummyimage.com/600x400/#ddd/green")
    .size(20, 30);

  var gradient = draw.gradient("linear", function (add) {
    add.stop(0, "#333");
    add.stop(1, "#fff");
  });

  rect.attr({ fill: gradient });

  var foreignObject = draw.foreignObject(300, 200);
  var inputEle = document.createElement("input"); // replaced by
  foreignObject.add(inputEle, true);
});
