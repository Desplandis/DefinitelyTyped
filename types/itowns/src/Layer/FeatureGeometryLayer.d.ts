import * as THREE from "three";
import GeometryLayer, { GeometryLayerOptions } from "./GeometryLayer";

export interface FeatureGeometryLayerOptions extends GeometryLayerOptions {
    batchId?: any; // TODO: function
    object3d?: THREE.Object3D;
    onMeshCreated?: (featureMesh: any, context: any) => void;
    accurate?: boolean;
}

declare class FeatureGeometryLayer extends GeometryLayer {
    constructor(id: string, options?: FeatureGeometryLayerOptions);

    readonly isFeatureGeometryLayer: boolean;

    accurate: boolean;
    buildExtent: boolean;
}
export default FeatureGeometryLayer;
