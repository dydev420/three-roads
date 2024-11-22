import { Object3D } from "three";

export default class VehicleGraphNode extends Object3D {
  next: VehicleGraphNode[];

  constructor(x: number, y: number) {
    super();
    this.position.set(x, 0, y);
    this.next = [];
  }

  connect = (node: VehicleGraphNode | null) => {
    if (!node || this.next.includes(node)) {
      return;
    }
    this.next.push(node);
  };

  disconnectAll = () => {
    this.next = [];
  };

  getRandomNextNode = (): VehicleGraphNode | null => {
    if(!this.next.length) return null;
    
    const i = Math.floor(Math.random() * this.next.length);
    return this.next[i];
  };
}
