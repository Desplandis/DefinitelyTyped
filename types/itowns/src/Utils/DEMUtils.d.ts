import * as THREE from "three";
import Coordinates from "../Core/Geographic/Coordinates";

type TiledGeometryLayer = any;
type TileMesh = any;

declare namespace _default {
    function getElevationValueAt(
        layer: TiledGeometryLayer,
        coord: Coordinates,
        method?: READ_Z_METHOD,
        tileHint?: TileMesh[]): number;

    function getTerrainObjectAt(
        layer: TiledGeometryLayer,
        coord: Coordinates,
        method?: READ_Z_METHOD,
        tileHint?: TileMesh[],
        cache?: object): {
        /**
         * - Pick coordinate with the elevation in coord.z.
         */
        coord: Coordinates;
        /**
         * - the picked elevation texture.
         * The texture where the `z` value has been read from
         */
        texture: THREE.Texture;
        /**
         * - the picked tile and the tile containing the texture
         */
        tile: TileMesh;
    };

    const FAST_READ_Z: 0;
    const PRECISE_READ_Z: 1;
    type READ_Z_METHOD = typeof FAST_READ_Z | typeof PRECISE_READ_Z;

    function placeObjectOnGround(
        layer: TiledGeometryLayer,
        crs: string,
        obj: THREE.Object3D,
        options?: {
            method?: READ_Z_METHOD;
            modifyGeometry: boolean;
        },
        tileHint?: TileMesh[]): boolean;
}

export default _default;

export function readTextureValueWithBilinearFiltering(
    metadata: any,
    texture: any,
    vertexU: any,
    vertexV: any): any;
