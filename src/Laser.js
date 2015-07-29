/*
 *  Laser.js
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("tmapp.Laser", {
    superClass: "tm.hybrid.Mesh",
    init: function(target) {
        // 着弾点
        var x = target.x;
        var y = target.y;
        var z = target.z;

        // 形状データとか準備
        var geo = THREE.CubeGeometry(1, 1, Math.abs(z));
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geo, mat);

        this.superInit(mesh);
        this.threeObject.hybridObject = this;

        this.setPosition(0, -10, 0);
        this.lookAt(new THREE.Vector3(x, y, z));

        this.time = 0;
    },

    update: function() {
        if (this.time == 10) {
            var that = this;
            this.remove();
        }
        this.time++;
    },
});

})();