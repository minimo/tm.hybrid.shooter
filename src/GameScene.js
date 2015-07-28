/*
 *  gameScene.js
 *  2015/07/28
 *  @auther minimo  
 *  This Program is MIT license.
 */
tm.define("tmapp.gameScene", {
    superClass: "tm.hybrid.Scene",
    init: function() {
        this.superInit();

        // カメラ調整
        this.camera.setPosition(0, 0, 30);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        // ライト
        this.directionalLight.setPosition(0, 100, -80);

        this.time = 1;
    },

    update: function(app) {
        if (this.time%30 == 0) this.enterEnemy();
        this.time++;
    },

    enterEnemy: function() {
        var x = (Math.random()*100).floor()-50;
        var y = (Math.random()*100).floor()-50;
        var enemy = tmapp.Enemy()
            .addChildTo(this)
            .setPosition(x, y, -1000);
    },

    checkCollision: function(x, y) {
        // Get Camera & scene object
        var camera = this.camera.threeObject;
        var scene = this.three.threeObject;

        // touch screen position normalize -1 to 1
        var mx =  (x/640)*2-1;
        var my = -(y/640)*2+1;
        var pos = new THREE.Vector3(mx, my, 1);
        pos.unproject(camera);

        // Create RayCaster
        var ray = new THREE.Raycaster(camera.position, pos.sub(camera.position).normalize());

        // Intersect object
        var obj = ray.intersectObjects(scene.children);

        if (obj.length > 0) {
            var target = obj[0].object.hybridObject;
            target.damage(100);
        }
    },

    ontouchstart: function(e) {
    },

    ontouchmove: function(e) {
    },

    ontouchend: function(e) {
        this.checkCollision(e.pointing.x, e.pointing.y);
    },
});
