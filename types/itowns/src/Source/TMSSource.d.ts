import Source, { SourceOptions } from "./Source";

export interface TMSSourceOptions extends SourceOptions {
    // TODO: Mandatory parameters: url
    tileMatrixSetLimits?: any;
    tileMatrixCallback?: (zoomLevel: number) => string;
    zoom?: { min: number, max: number };
}

declare class TMSSource extends Source {
    constructor(source: TMSSourceOptions);

    readonly isTMSSource: boolean;

    // TODO: tileMatrixSet: string

    isInverted: boolean;
    tileMatrixSetLimits: any;
    extentSetlimits: any;
    zoom: { min: number; max: number };
    tileMatrixCallback: (zoomLevel: number) => string;

    urlFromExtent(extent: any): string;
    extentInsideLimit(extent: any, zoom: any): any;
}
export default TMSSource;
