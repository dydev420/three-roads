// @ts-types="@types/three"
import { EventDispatcher } from "three";
import { rotateArray } from "../engine/helpers/array.ts";


export type TileSocketConfig = {
  type: string
  rotation: 0 | 90 | 180 | 270;
  sockets: string[];
}

export default class WaveFunctionCollapse  extends EventDispatcher{
  running: boolean;

  constructor(size: number) {
    super();

    this.running = false;
    console.log('WaveFunctionCollapse:: init size', size);
  }

  static getRotatedSockets = (rotation: number, sockets: string[]) => {
    const len = sockets.length;
    const newSockets: string[] = [];
  
    for (let i = 0; i < len; i++) {
      newSockets[i] = sockets[(i - rotation + len) % len]
    }
  
    return newSockets;
  }

  static generateTileSockets = (type: string, sockets: string[]): TileSocketConfig[] => {
    return Array.from({ length: sockets.length }).map((_, i) => ({
      type,
      rotation: i,
      // sockets: WaveFunctionCollapse.getRotatedSockets(i, sockets)
      sockets: rotateArray(sockets, i)
    } as TileSocketConfig));
  }

  generate = () => {

  };

  /**
   *recomputes the tile and its neighbors by running collapsing all tiles again
   */
  regenerate = (x: number, y: number) => {

    console.log('Generating neighbors for:', x, y);
  };
}
