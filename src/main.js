/*
 *  main.js
 *  2015/07/28
 *  @auther minimo  
 *  This Program is MIT license.
 */
tm.main(function() {
    var app = tm.hybrid.Application("#canvas2d", "#canvas3d");
    app.fps = 30;
    app.resize(640, 960).fitWindow().run();
    app.enableStats();
    
    app.replaceScene(tm.game.LoadingScene({
        width: 640, height: 960,
        assets: {
        },
        nextScene: gameScene,
    }));
});

