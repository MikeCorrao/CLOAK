import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
  MeshBasicMaterial,
  Mesh,
  Fog,
  DirectionalLight,
  DoubleSide,
  AxesHelper,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export default function ObjectViewer(props) {
  function displayObj(title) {
    const elementId = "#" + title;
    const canvas = document.querySelector(elementId);
    const renderer = new WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight);

    const scene = new Scene();
    // const axesHelper = new AxesHelper(20);
    // scene.add(axesHelper);

    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new DirectionalLight(color, intensity);
      light.position.set(10, 4, 10);
      scene.add(light);
    }

    const fov = 65;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    const camera = new PerspectiveCamera(fov, aspect, near, far);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    camera.position.set(30, 0, 30);
    camera.lookAt(controls.target);

    controls.enabled = true;
    controls.target.set(0, 9, 0);
    controls.update();

    {
      const mtlLoader = new MTLLoader();
      mtlLoader.load("objs/CLOAK3DSCULPTURE.mtl", (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(`objs/CLOAK3DSCULPTURE.obj`, (obj) => {
          scene.add(obj);
          obj.scale.multiplyScalar(0.3);
          obj.position.set(-2, 0, 0);
          obj.rotation.z = -Math.PI / 7;
          obj.rotation.x = Math.PI / 5;
          obj.rotation.y = Math.PI / 8;
          scene.add(obj);
          renderer.render(scene, camera);
          requestAnimationFrame(render);
        });
      });
    }

    function render(time) {
      time *= 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  useEffect(() => {
    displayObj(props.title);
  }, []);

  return <canvas id={props.title}></canvas>;
}
