// @ts-types="@types/three"
import { EventDispatcher } from "three";
import { rotateArray } from "../engine/helpers/array.ts";
import sockets from "./sockets.ts";
import { TileSocketConfig } from "./Tiles.ts";


export type WaveTile = {
  collapsed: boolean;
  options: TileSocketConfig[];
  cell: [number, number];
  type: string;
}

export default class WaveFunctionCollapse  extends EventDispatcher{
  running: boolean;
  waveGrid: WaveTile[];
  tiles: TileSocketConfig[];
  tileDomains: number[];

  constructor(size: number) {
    super();

    this.running = false;
    this.tiles = globalThis.structuredClone(sockets);
    this.waveGrid = [];
    this.tileDomains = [];

    console.log('WaveFunctionCollapse:: init size', size);
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
