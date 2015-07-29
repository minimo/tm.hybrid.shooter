/*
 *  PowerGauage.js
 *  @auther minimo  
 *  This Program is MIT license.
 */
 
// パワーゲージ
tm.define("tmapp.PowerGauage", {
    superClass:  tm.display.CanvasElement,

    //アクティブフラグ
    active: false,

    //最小値
    min: 0,

    //最大値
    max: 100,

    //現在値
    _value: 100,

    init: function() {
        this.superInit();

        //スケール表示
        var that = this;
        this.label = tm.display.Label("", 30).addChildTo(this);
        this.label.fontFamily = "'Orbitron'";
        this.label.align     = "center";
        this.label.baseline  = "middle";
        this.label.fontSize = 30;
        this.label.fontWeight = 700;
        this.label.outlineWidth = 2;
        this.fillStyle = "rgba(255, 255, 255, 1.0)";
        this.label.update = function() {
            this.text = ~~(that.value) + "%";
        };
    },

    update: function() {
    },

    draw: function(canvas) {
        canvas.lineWidth = 30;
        canvas.globalCompositeOperation = "lighter";

        var rad = 0;
        var value = this._value;
        var clock = true;
        var u = this.max;
        rad = (360/u)*toRad*value;

        canvas.strokeStyle = "red";
        canvas.strokeArc(0, 0, 40, Math.PI*2, rad, clock);

        canvas.strokeStyle = "blue";
        canvas.strokeArc(0, 0, 40, rad, 0, clock);
    },
});

tmapp.PowerGauage.prototype.accessor("value", {
    "get": function()   { return this._value; },
    "set": function(v)  { this._value = clamp(v, this.min, this.max); }
});
