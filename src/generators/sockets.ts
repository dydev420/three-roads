import WaveFunctionCollapse, { TileSocketConfig } from "./WaveFunctionCollapse.ts";

const sockets: TileSocketConfig[] = [
   /**
   * Blank tile
  */
  ...WaveFunctionCollapse.generateTileSockets('blank',  ['AAA', 'AAA', 'AAA', 'AAA']),
  
  /**
   * Straight road
  */
  ...WaveFunctionCollapse.generateTileSockets('straight',  ['ABA',  'AAA', 'ABA', 'AAA']),
  
  /**
   * End road
   */
  ...WaveFunctionCollapse.generateTileSockets('end',  ['AAA', 'AAA', 'ABA', 'AAA']),
  
  /**
   * Corner road
  */
  ...WaveFunctionCollapse.generateTileSockets('corner',  ['AAA', 'ABA', 'ABA', 'AAA']),
  
  /**
   * T intersection
  */
  ...WaveFunctionCollapse.generateTileSockets('t',  ['AAA', 'ABA', 'ABA', 'ABA']),
  
  /**
   * Cross intersection
  */
  ...WaveFunctionCollapse.generateTileSockets('cross',  ['ABA', 'ABA', 'ABA', 'ABA']),
];

export default sockets;