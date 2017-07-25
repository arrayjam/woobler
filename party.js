var canvas = d3.select("#canvas"),
    context = canvas.node().getContext("2d"),
    timer;

d3.select(window).on("resize", resizeCanvas);

function resizeCanvas() {
    canvas
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight);

    drawStuff();
}
resizeCanvas();

function drawStuff() {
    if (timer) timer.stop();    
    var side = 15;
    var slow = 1500;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var hue1 = d3.scaleLinear().domain([0, width]).range([-100, 100]);
    var hue2 = d3.scaleLinear().domain([0, width]).range([-100, 100]);

    timer = d3.interval(function (elapsed) {
        var funkadelic = elapsed / slow;
        var s = Math.sin(funkadelic);
        var c = Math.cos(funkadelic);
        for (var y = 0; y < height; y += side) {
            for (var x = 0; x < width; x += side) {
                context.fillStyle = d3.lab(75, hue1(y + s * x), hue2(x + c * y));
                context.fillRect(x, y, side, side);
            }
        }
    });

}