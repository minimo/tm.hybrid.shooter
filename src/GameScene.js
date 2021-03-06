/*
 *  gameScene.js
 *  @auther minimo  
 *  This Program is MIT license.
 */
tm.define("tmapp.gameScene", {
    superClass: "tm.hybrid.Scene",
    init: function() {
        this.superInit();

        // カメラ調整
        this.camera.setPosition(0, 0, 0);
        this.camera.lookAt(new THREE.Vector3(0, 0, 10));
        this.player = this.camera;

        // ライト
        this.directionalLight.setPosition(0, 100, 80);

        //ゲージ
        this.gauage = tmapp.PowerGauage()
            .addChildTo(this)
            .setPosition(SC_W-60, SC_H-60);
        this.gauage.tweener.clear();
        this.gauage.tweener.to({value: 0}, 1000).wait(500).to({value: 100}, 1000).wait(500).setLoop(true);

        this.player = tm.hybrid.Sprite("iron")
            .addChildTo(this)
            .setPosition(0 , -1, 10);

        this.time = 1;
    },

    update: function(app) {
        if (this.time%30 == 0) this.enterEnemy();
        this.time++;
    },

    enterLaser: function(target) {
        tmapp.Laser(this.player, target, 5).addChildTo(this);
        tmapp.Laser(this.player, target,-5).addChildTo(this);
    },

    enterEnemy: function() {
        var x = rand(0, 100)-50;
        var y = rand(0, 100)-50;
        var enemy = tmapp.Enemy()
            .addChildTo(this)
            .setPosition(x, y, 1000);
        enemy.parentScene = this;
    },

    hitTest: function(x, y) {
        // Get Camera & scene object
        var camera = this.camera.threeObject;
        var scene = this.three.threeObject;

        // touch screen position normalize -1 to 1
        var mx =  (x/SC_W)*2-1;
        var my = -(y/SC_H)*2+1;
        var pos = new THREE.Vector3(mx, my, 1);
        pos.unproject(camera);

        // Create RayCaster
        var ray = new THREE.Raycaster(camera.position, pos.sub(camera.position).normalize());

        // Intersect object
        var obj = ray.intersectObjects(scene.children);
        if (obj.length > 0) return obj[0].object.hybridObject;
        return null;
    },

    ontouchstart: function(e) {
        var target = this.hitTest(e.pointing.x, e.pointing.y);
        if (target) {
            this.enterLaser(target);
            target.damage(1000);
        }
    },

    ontouchmove: function(e) {
    },

    ontouchend: function(e) {
    },
});
