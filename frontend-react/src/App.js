import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  async getBoxes() {
    const response = await axios.get("https://localhost:44320/boxes");
    return response.data;
  }

  buildBox(box) {
    console.log(box.color)
    var colorHex = parseInt(box.color, 16);
    var geometry = new THREE.BoxGeometry(box.width, box.height, box.depth);
    var material = new THREE.MeshBasicMaterial({ color: colorHex });
    var boxMesh = new THREE.Mesh(geometry, material);
    boxMesh.position.x = box.x;
    boxMesh.position.y = box.y;
    boxMesh.position.z = box.z;
    return boxMesh;
  }
  async componentDidMount() {
    const boxes = await this.getBoxes()

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    for (var i = 0; i < boxes.length; i++) {
      scene.add(this.buildBox(boxes[i]))
    }
    camera.position.z = 5;
    camera.position.x = 5;
    camera.position.y = 5;
    camera.lookAt(0, 0, 0)
    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return (
      <div />
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
