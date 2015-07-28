/*
 *  main.js
 *  2015/07/28
 *  @auther minimo  
 *  This Program is MIT license.
 */

var SC_W = 640;
var SC_H = 640;

tm.main(function() {
    var app = tm.hybrid.Application("#canvas2d", "#canvas3d");
    app.fps = 60;
    app.resize(SC_W, SC_H).fitWindow().run();
    app.enableStats();
    
    app.replaceScene(tm.game.LoadingScene({
        width: SC_W, height: SC_H,
        assets: {
        },
        nextScene: tmapp.gameScene,
    }));
});

