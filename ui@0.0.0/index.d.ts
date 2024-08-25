import * as React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonPropsT = {
    kind?: 'primary' | 'secondary';
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare const Button: React.FC<ButtonPropsT>;

declare function TextAnimation({ fontSize, color, content, delay, width, yBefore, isFramerCanvas, fontFamily, }: {
    fontSize: any;
    color: any;
    content: any;
    delay: any;
    width?: any;
    yBefore?: number;
    isFramerCanvas?: boolean;
    fontFamily?: string;
}): react_jsx_runtime.JSX.Element;

declare function TextHover({ fontSize, color, content, delay, width, font, border, fontWeight, isFramerCanvas, }: {
    fontSize: any;
    color: any;
    content: any;
    delay?: number;
    width?: any;
    font?: any;
    border?: boolean;
    fontWeight?: number;
    isFramerCanvas?: boolean;
}): react_jsx_runtime.JSX.Element;

export { Button, TextAnimation, TextHover };
