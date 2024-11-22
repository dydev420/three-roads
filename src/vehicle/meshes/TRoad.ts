// @ts-types="@types/three"
import { BoxGeometry, Group, MathUtils, Mesh, MeshStandardMaterial } from "three";

const geometry = new BoxGeometry(1, 1, 1);
geometry.translate(0, -5.5, 0);
const material = new MeshStandardMaterial({ color: 'black' });

export default class TRoad extends Group {
  constructor(rotation: number = 0) {
    super();
    this.rotation.set(0, MathUtils.degToRad(rotation), 0);
    // mainMesh
    const mesh = new Mesh(geometry, material);
    mesh.scale.set(1, 0.1, 0.5);
    
    // connection mesh
    const connectionMesh = new Mesh(geometry, material);
    connectionMesh.scale.set(0.5, 0.1, 0.25);
    connectionMesh.position.set(0, 0, 0.25 + 0.25 * 0.5);

    this.add(mesh);
    this.add(connectionMesh);
  }
}
