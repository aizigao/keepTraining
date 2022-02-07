const main = () => {
    var stage = new Konva.Stage({
        container: "container",
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // add canvas element
    var layer = new Konva.Layer();
    // var layer2 = new Konva.Layer();
    stage.add(layer);
    // stage.add(layer2);

    // create shape
    var box = new Konva.Rect({
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        fill: "#00D2FF",
        stroke: "black",
        strokeWidth: 4,
        draggable: true,
    });
    var box2 = box.clone();
    var box3 = box.clone();

    var triangle = new Konva.Shape({
        sceneFunc: function (context) {
            context.beginPath();
            context.moveTo(20, 50);
            context.lineTo(220, 80);
            context.quadraticCurveTo(150, 100, 260, 170);
            context.closePath();

            // special Konva.js method
            context.fillStrokeShape(this);
        },
        fill: "#00D2FF",
        stroke: "black",
        strokeWidth: 4,
        draggable: true,
    });
    var tr = new Konva.Transformer({
        keepRatio: true,
        rotate: false,
        enabledAnchors: [
            // "top-left",
            "top-right",
            // "bottom-left",
            // "bottom-right",
        ],
    });
    tr.nodes([box]);
    layer.add(tr);

    layer.add(box);
    layer.add(box2);
    layer.add(box3);
    layer.add(triangle);

    // add a new feature, lets add ability to draw selection rectangle
    var selectionRectangle = new Konva.Rect({
        fill: "rgba(0,0,255,0.5)",
        visible: false,
    });
    layer.add(selectionRectangle);

    var x1, y1, x2, y2;
    stage.on("mousedown touchstart", (e) => {
        // do nothing if we mousedown on any shape
        if (e.target !== stage) {
            return;
        }
        e.evt.preventDefault();
        x1 = stage.getPointerPosition().x;
        y1 = stage.getPointerPosition().y;
        x2 = stage.getPointerPosition().x;
        y2 = stage.getPointerPosition().y;

        selectionRectangle.visible(true);
        selectionRectangle.width(0);
        selectionRectangle.height(0);
    });

    stage.on("mousemove touchmove", (e) => {
        // do nothing if we didn't start selection
        if (!selectionRectangle.visible()) {
            return;
        }
        e.evt.preventDefault();
        x2 = stage.getPointerPosition().x;
        y2 = stage.getPointerPosition().y;

        selectionRectangle.setAttrs({
            x: Math.min(x1, x2),
            y: Math.min(y1, y2),
            width: Math.abs(x2 - x1),
            height: Math.abs(y2 - y1),
        });
    });

    stage.on("mouseup touchend", (e) => {
        // do nothing if we didn't start selection
        if (!selectionRectangle.visible()) {
            return;
        }
        e.evt.preventDefault();
        // update visibility in timeout, so we can check it in click event
        setTimeout(() => {
            selectionRectangle.visible(false);
        });

        var shapes = stage.find(".rect");
        var box = selectionRectangle.getClientRect();
        var selected = shapes.filter((shape) =>
            Konva.Util.haveIntersection(box, shape.getClientRect())
        );
        tr.nodes(selected);
    });

    // clicks should select/deselect shapes
    stage.on("click tap", function (e) {
        // if we are selecting with rect, do nothing
        if (selectionRectangle.visible()) {
            return;
        }

        // if click on empty area - remove all selections
        if (e.target === stage) {
            tr.nodes([]);
            return;
        }

        // do nothing if clicked NOT on our rectangles
        if (!e.target.hasName("rect")) {
            return;
        }

        // do we pressed shift or ctrl?
        const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
        const isSelected = tr.nodes().indexOf(e.target) >= 0;

        if (!metaPressed && !isSelected) {
            // if no key pressed and the node is not selected
            // select just one
            tr.nodes([e.target]);
        } else if (metaPressed && isSelected) {
            // if we pressed keys and node was selected
            // we need to remove it from selection:
            const nodes = tr.nodes().slice(); // use slice to have new copy of array
            // remove node from array
            nodes.splice(nodes.indexOf(e.target), 1);
            tr.nodes(nodes);
        } else if (metaPressed && !isSelected) {
            // add the node into selection
            const nodes = tr.nodes().concat([e.target]);
            tr.nodes(nodes);
        }
    });

    // add cursor styling
    box.on("mouseover", function () {
        document.body.style.cursor = "pointer";
    });
    box.on("mouseout", function () {
        document.body.style.cursor = "default";
    });
    window.test = () => {
        return stage.toJSON();
    };
};

export default main;
