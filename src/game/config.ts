import { VehicleConfig } from "../vehicle/VehicleGraph.ts";

export type GameConfig = {
  vehicle: VehicleConfig;
}

const config: GameConfig = {
  vehicle: {
    speed: 0.0005,
    fadeTime: 1000,
    maxLifetime: 10000,
    maxVehicleCount: 1,
    spawnInterval: 1000,
    maxRecursiveRetry: 20,
    maxHistory: 4,
  },
};

export default config;