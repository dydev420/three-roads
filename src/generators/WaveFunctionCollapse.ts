// @ts-types="@types/three"
import { EventDispatcher } from "three";
import { GridXY } from "../game/level/LevelGrid.ts";


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
      sockets: WaveFunctionCollapse.getRotatedSockets(i, sockets)
    } as TileSocketConfig));
  }

  generate = () => {

  };

  generateNeighbors = (gridXY: GridXY) => {

    console.log('Generating neighbors for:', gridXY);
  };
}
