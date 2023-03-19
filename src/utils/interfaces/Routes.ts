export interface Routes {
    routes: Route[];
}
export interface Route {
    distanceMeters: number;
    duration:       string;
    polyline:       Polyline;
}

export interface Polyline {
    encodedPolyline: string;
}