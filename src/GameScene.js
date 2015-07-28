/*
 *  gameScene.js
 *  2015/07/28
 *  @auther minimo  
 *  This Program is MIT license.
 */
tm.define("gameScene", {
    superClass: "tm.hybrid.Scene",
    init: function() {
        this.superInit();

        // カメラ調整
        this.camera.setPosition(0, 0, 30);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        
        // ライト
        this.directionalLight.setPosition(0, 100, -80);

        this.time = 0;
    },

    update: function(app) {
    },

    ontouchstart: function(e) {
    },

    ontouchmove: function(e) {
    },

    ontouchend: function(e) {
    },
});
