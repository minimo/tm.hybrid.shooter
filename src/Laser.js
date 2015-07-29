/*
 *  Laser.js
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("tmapp.Laser", {
    superClass: "tm.hybrid.Mesh",
    init: function(x, y, z) {
        // 着弾点
        x = x || 0;
        y = y || 0;
        z = z || -1000;

        // 形状データとか準備
        var geo = THREE.CubeGeometry(100, 100, 100);
        var mat = new THREE.MeshLambertMaterial({color: 0x00aaaa});
        var mesh = new THREE.Mesh(geo, mat);

        this.superInit(mesh);
        this.threeObject.hybridObject = this;

        this.setPosition(x, y, z);
        this.lookAt(x, y, z);

        this.time = 0;
    },

    update: function() {
        if (this.time == 60) {
            var that = this;
            this.remove();
        }
        this.time++;
    },
});

})();
