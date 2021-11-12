var foo = function () {
    var queue = [];
    var timer;
    this.delay = function (per) {
        timer = setTimeout(function () {
            timer = 0;
            var f;
            while ((f = queue.shift())) f();
        }, per);
        return this;
    };
    this.addFunction = function (f) {
        if (timer) queue.push(f);
        else f();
        return this;
    };
    this.start = function () {
        this.addFunction(function () {
            alert("start");
        });
        return this;
    };
};
