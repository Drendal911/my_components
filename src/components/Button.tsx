import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


interface ButtonProps {
    title?: string;
    display?: 'none'|'inline'|'block'|'inline-block'|'flex'|'grid'|'inline_flex'|'inline-grid'|'initial'|'inherit';
    margin?: string;
    textAlign?: 'center' | 'left' | 'right' | 'justify' | 'initial' | 'inherit';
    padding?: string;
    fontWeight?: 'normal'|'bold'|'lighter'|'bolder'|number;
    backgroundColor?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    hover?: {
        backgroundColor?: string;
        color?: string;
    }
    onClick?: () => void;
}

export function Button({ title, display, margin, textAlign, padding, fontWeight, backgroundColor, color, border, borderRadius, width, height, hover, onClick }: ButtonProps) {

    return(
        <button onClick={onClick} css={css`
              display: ${display ? display : 'inline-block'};
              margin: ${margin ? margin : '1rem'};
              text-align: ${textAlign ? textAlign : 'center'};
              padding: ${padding ? padding : '.65rem'};
              font-weight: ${fontWeight ? fontWeight : 'bold'};
              background-color: ${backgroundColor ? backgroundColor : 'white'};
              color: ${color ? color : '#79589F'};
              border-radius: ${borderRadius ? borderRadius : '.65rem'};
              border: ${border ? border : 'solid #79589F'};
              width: ${width ? width : '6rem'};
              height: ${height ? height : '2.5rem'};
              :hover {
                background-color: ${hover?.backgroundColor};
                color: ${hover?.color}
              }
            `
        }>
            {title ? title : 'Button'}
        </button>
    )
}