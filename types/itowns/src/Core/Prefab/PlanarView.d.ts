import Extent from "../Geographic/Extent";
import Layer from "../../Layer/Layer";
import View from "../View";
import type PlanarControls from "../../Controls/PlanarControls";
// import PlanarLayer from "./Planar/PlanarLayer"; TODO

export default class PlanarView extends View {
    constructor(viewerDiv: HTMLDivElement, extent: Extent, options?: any); // TODO

    readonly isPlanarView: boolean;
    controls?: PlanarControls;
    // tileLayer: PlanarLayer; TODO
    addLayer<L extends Layer>(layer: L): Promise<L>;
}
