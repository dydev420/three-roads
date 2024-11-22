import VehicleGraphTile from "./VehicleGraphTile.ts";
import CornerRoadTile from "./CornerRoadTile.ts";
import CrossRoadTile from "./CrossRoadTile.ts";
import EndRoadTile from "./EndRoadTile.ts";
import StraightRoadTile from "./StraightRoadTile.ts";
import TRoadTile from "./TRoadTile.ts";

abstract class RoadTile {
  static create(x: number, y: number, rotation: number, type: string): VehicleGraphTile {
    switch (type) {
      case 'straight': return new StraightRoadTile(x, y, rotation, type);
      case 't': return new TRoadTile(x, y, rotation, type);
      case 'cross': return new CrossRoadTile(x, y, rotation, type);
      case 'corner': return new CornerRoadTile(x, y, rotation, type);
      case 'end': return new EndRoadTile(x, y, rotation, type);
      default: return new StraightRoadTile(x, y, rotation, type);
    }
  };
}

export default RoadTile;
