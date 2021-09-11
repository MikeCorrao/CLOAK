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
  TextureLoader,
  Texture,
  DoubleSide,
  AxesHelper,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

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

    const fov = 45;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    const camera = new PerspectiveCamera(fov, aspect, near, far);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    camera.position.set(5, 2, 5);
    camera.lookAt(controls.target);

    controls.enabled = true;
    controls.target.set(1.5, 2, 1.5);
    controls.update();

    {
      {
        var material = new MeshPhongMaterial({
          color: "white",
          side: DoubleSide,
        });
      }
      const objLoader = new OBJLoader();
      objLoader.load(`objs/${title}.obj`, function (obj) {
        obj.traverse(
          function (child) {
            if (child instanceof Mesh) {
              child.material = material;
            }
            scene.add(obj);
            obj.scale.multiplyScalar(0.3);
            obj.position.set(3, -2, 0);
            obj.rotation.x = Math.PI;
            obj.rotation.y = -(Math.PI / 5);
            scene.add(obj);
            renderer.render(scene, camera);
            requestAnimationFrame(render);
          },
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          function (error) {
            console.log("An error happened", error);
          }
        );
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
