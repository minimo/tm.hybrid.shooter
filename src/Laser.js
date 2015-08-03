/*
 *  Laser.js
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("tmapp.Laser", {
    superClass: "tm.hybrid.Mesh",
    init: function(from, target, offset) {
        offset = offset || 5;
        // 着弾点
        var x = target.x;
        var y = target.y;
        var z = target.z;

        // 形状データとか準備
        var geo = THREE.CubeGeometry(0.5, 0.5, Math.abs(z)+10);
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geo, mat);

        this.superInit(mesh);
        this.threeObject.hybridObject = this;

        this.setPosition(from.x+offset, from.y-10, from.z);
        this.lookAt(new THREE.Vector3(x, y, z));

        this.from = from;
        this.offset = offset;
        this.target = target;
        this.time = 0;
    },

    update: function() {
        if (this.time > 6) {
            var that = this;
            this.remove();
        }
        this.setPosition(this.from.x+this.offset, this.from.y-5, this.from.z);
        this.time++;
    },
});

})();
