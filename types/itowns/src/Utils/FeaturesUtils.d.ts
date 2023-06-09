import Coordinates from "../Core/Geographic/Coordinates";
import Feature, { FeatureCollection } from "../Core/Feature";

declare namespace _default {
    function filterFeaturesUnderCoordinate(
        coordinate: Coordinates,
        collection: Coordinates | FeatureCollection,
        epsilon?: number): Feature[];
}
export default _default;
