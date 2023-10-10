import * as React from 'react';
import { Vector3 } from 'three';
import { Line2 } from 'three-stdlib';
import { LineProps } from './Line';
export declare const CubicBezierLine: React.ForwardRefExoticComponent<Omit<LineProps, "ref" | "points"> & {
    start: Vector3 | [number, number, number];
    end: Vector3 | [number, number, number];
    midA: Vector3 | [number, number, number];
    midB: Vector3 | [number, number, number];
    segments?: number;
} & React.RefAttributes<Line2>>;
//# sourceMappingURL=CubicBezierLine.d.ts.map