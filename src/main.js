/*
 *  main.js
 *  @auther minimo  
 *  This Program is MIT license.
 */

var SC_W = 640;
var SC_H = 640;

var toRad = 3.14159/180;    //弧度法toラジアン変換
var toDeg = 180/3.14159;    //ラジアンto弧度法変換

//数値の制限
var clamp = function(x, min, max) {return (x<min)?min:((x>max)?max:x);}

tm.main(function() {
    var app = tm.hybrid.Application("#canvas2d", "#canvas3d");
    app.fps = 60;
    app.resize(SC_W, SC_H).fitWindow().run();
    app.enableStats();
    
    app.replaceScene(tm.game.LoadingScene({
        width: SC_W, height: SC_H,
        assets: {
            Orbitron: "fonts/Orbitron-Regular.ttf",
        },
        nextScene: tmapp.gameScene,
    }));
});

