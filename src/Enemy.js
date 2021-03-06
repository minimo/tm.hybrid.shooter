/*
 *  Enemy.js
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("tmapp.Enemy", {
    superClass: "tm.hybrid.Mesh",
    init: function() {
        // 形状データとか準備
        var geo = THREE.CubeGeometry(10, 10, 10);
        var mat = new THREE.MeshPhongMaterial({color: "rgb(128,128,128)"});
        var mesh = new THREE.Mesh(geo, mat);

        this.superInit(mesh);
        this.threeObject.hybridObject = this;

        // ステータス
        this.hp = 10;

        this.time = 0;
    },

    update: function() {
        this.position.z -= 5;
        this.rotation.x += 0.01;
        this.rotation.z += 0.01;

        if (this.position.z < 0) {
            this.remove();
            delete threeObject;
        }

        this.time++;
    },

    damage: function(power) {
        power = power || 0;
        this.hp -= power;
        if (this.hp < 0) {
            this.explode();
            this.remove();
            delete threeObject;
            return true;
        }
        return false;
    },

    explode: function() {
        var scene = this.parentScene;
        var ex = tmapp.Explode(30)
            .addChildTo(scene)
            .setPosition(this.x, this.y, this.z);
    },
});

})();
