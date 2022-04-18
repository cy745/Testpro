<template>
  <div id="threeBroad">
    <div id="menu">
      <circleSlider :attr.sync="Camera.position.x" lw="4px" max="100" min="0" rt="113"
                    wd='64px'></circleSlider>
      <circleSlider :attr.sync="Camera.position.y" lw="4px" max="100" min="0" rt="113"
                    wd='64px'></circleSlider>
      <circleSlider :attr.sync="Camera.position.z" lw="4px" max="1000" min="500" rt="113"
                    wd='64px'></circleSlider>
    </div>

  </div>
</template>

<script>
import circleSlider from "@/components/circleSlider"
import * as THREE from "three"
// import OrbitControls from "three/examples/js/controls/OrbitControls"
// import FlyControls from "three/examples/js/controls/FlyControls"
// import DeviceOrientationControls from "three/examples/js/controls/DeviceOrientationControls"
import {FirstPersonControls} from "three/examples/jsm/controls/FirstPersonControls"

import Stats from "stats.js";

export default {
  name: "room",
  components: {
    circleSlider,
  },
  data: function () {
    return {
      Scene: new THREE.Scene(),
      Camera: new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000),
      Randerer: new THREE.WebGLRenderer({antialias: true}),
      Controller: null,
      Stats: new Stats(),
    }
  },
  created() {
    this.Randerer.setSize(window.innerWidth, window.innerHeight);
    window.onresize = () => {
      this.Randerer.setSize(window.innerWidth, window.innerHeight);
      this.Camera.aspect = window.innerWidth / window.innerHeight;
      this.Camera.updateProjectionMatrix();
    };
  },
  mounted() {
    this.Stats.dom.style.left = "";
    this.Stats.dom.style.right = "0px";
    document.body.appendChild(this.Stats.dom);
    this.Controller = new FirstPersonControls(this.Camera);


    this.Controller.enabled = true;
    this.Controller.lookSpeed = 0.02; //鼠标移动查看的速度
    this.Controller.movementSpeed = 10; //相机移动速度
    this.Controller.noFly = false;
    this.Controller.constrainVertical = true; //约束垂直
    this.Controller.verticalMin = 1.0;
    this.Controller.verticalMax = 2.0;
    this.Controller.lon = 0; //进入初始视角x轴的角度
    this.Controller.lat = 0; //初始视角进入后y轴的角度
    document.getElementById("threeBroad").appendChild(this.Randerer.domElement);
    // let sphere = this.createSphereByColor(100, 0x1e1e1e);

    let textureLoader = new THREE.TextureLoader();

    let cubeTexture = textureLoader.load(require("@/assets/logo.png"));
    let boxTexture = [
      textureLoader.load(require("@/assets/skybox/rt.jpg")),
      textureLoader.load(require("@/assets/skybox/lf.jpg")),
      textureLoader.load(require("@/assets/skybox/up.jpg")),
      textureLoader.load(require("@/assets/skybox/dn.jpg")),
      textureLoader.load(require("@/assets/skybox/ft.jpg")),
      textureLoader.load(require("@/assets/skybox/bk.jpg")),
    ];

    let cube = this.createSingleCubeByColor(1, 1, 1, cubeTexture);
    let skybox = this.createSkybox(boxTexture);

    this.Scene.add(cube);
    this.Scene.add(skybox);


    this.Camera.position.z = 20;
    this.Camera.lookAt(cube.position);

    let clock = new THREE.Clock();

    this.animate(() => {
      this.Controller.update(clock.getDelta());
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
    });
  },
  methods: {
    createSingleCubeByColor(width, height, depth, parameter, doubleSide) {
      if (doubleSide === undefined) doubleSide = false;
      if (typeof parameter === "number") parameter = {color: parameter};
      else parameter = {map: parameter};
      let geometry = new THREE.BoxGeometry(width, height, depth);
      let meterial = new THREE.MeshBasicMaterial(parameter);
      return new THREE.Mesh(geometry, meterial);
    },
    createSkybox(parameter) {
      let geometry = new THREE.BoxGeometry(500, 500, 500);
      let meterial = [
        new THREE.MeshBasicMaterial({map: parameter[0], side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: parameter[1], side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: parameter[2], side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: parameter[3], side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: parameter[4], side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: parameter[5], side: THREE.DoubleSide}),
      ];
      return new THREE.Mesh(geometry, meterial);
    },
    animate(call) {
      this.Stats.begin();
      if (typeof call === "function") call();
      this.Randerer.render(this.Scene, this.Camera);
      this.Stats.end();
      requestAnimationFrame(() => this.animate(call));
    }
  },
  beforeDestroy() {
    this.Camera = null;
    this.Randerer = null;
    this.Scene = null;
    this.Controller = null;
    this.Stats = null;
  },
}
</script>

<style scoped>
#threeBroad {
  width: 100%;
  height: 100vh;
  background-color: #333333;
}

#menu {
  bottom: 100px;
  right: 100px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: fit-content;
  padding: 20px;
  height: 150px;
}

#menu > * {
  margin: 0 15px;
}
</style>
