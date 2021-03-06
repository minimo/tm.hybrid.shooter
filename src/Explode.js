/*
 *  Explode.js
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("tmapp.Explode", {
    superClass: "tm.hybrid.ThreeElement",
    init: function(n) {
        this.superInit();
        n = n || 10;    //生成する破片の数

        // 形状データとか準備
        this.ele = [];
        var mat = new THREE.MeshPhongMaterial({color: "rgb(255,0,0)"});
        for (var i = 0; i < n; i++) {
            var size = rand(1, 10);
            var geo = THREE.CubeGeometry(size, size, size);
            var mesh = new THREE.Mesh(geo, mat);

            this.ele[i] = tm.hybrid.ThreeElement(mesh).addChildTo(this);
            this.ele[i].vx = rand(0, 6)-3;
            this.ele[i].vy = rand(0, 6)-3;
            this.ele[i].vz = rand(0, 6)-3;
            this.ele[i].rx = (rand(0, 6)-3)*0.01;
            this.ele[i].ry = (rand(0, 6)-3)*0.01;
            this.ele[i].rz = (rand(0, 6)-3)*0.01;
            this.ele[i].update = function(){
                this.x += this.vx;  this.vx *= 0.9;
                this.y += this.vy;  this.vy *= 0.9;
                this.z += this.vz;  this.vz *= 0.9;
                this.rotation.x += this.rx;
                this.rotation.y += this.ry;
                this.rotation.z += this.rz;
                var v = Math.abs(this.vx)+Math.abs(this.vy)+Math.abs(this.vz);
                if (v < 0.3) this.remove();
            };
        }
        this.time = 0;
    },

    update: function() {
        if (this.time > 60) {
            this.remove();
        }
        this.time++;
    },
});

})();
