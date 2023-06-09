import { CameraTransformOptions } from "../../Utils/CameraUtils";
import Extent from "../Geographic/Extent";
import Layer from "../../Layer/Layer";
import View from "../View";
// import GlobeLayer from "./Globe/GlobeLayer";
import GlobeControls from "../../Controls/GlobeControls";

export namespace GLOBE_VIEW_EVENTS {
    const GLOBE_INITIALIZED: string;
    const LAYER_ADDED: string;
    const LAYER_REMOVED: string;
    const COLOR_LAYERS_ORDER_CHANGED: string;
}

// TODO GlobeViewOptions
// -> View options
// object3d: THREE.Object3D
// -> GlobeLayer options
// noControls: boolean
// -> GlobeControls options
// handleCollision: boolean
// -> Atmosphere options

declare class GlobeView extends View {
    constructor(
        viewerDiv: HTMLDivElement,
        placement?: CameraTransformOptions | Extent,
        options?: any);

    readonly isGlobeView: boolean;
    // tileLayer: GlobeLayer;
    controls?: GlobeControls;

    addLayer<L extends Layer>(layer: L): Promise<L>;
    // TODO: screenCoord is optional and same type as gfxEngin.getWindowSize()
    getPixelsToDegrees(pixels?: number, screenCoord?: any): number;
    getPixelsToDegreesFromDistance(pixels?: number, distance?: number): number;
    getMetersToDegrees(meters?: number): number;
}

export default GlobeView;
