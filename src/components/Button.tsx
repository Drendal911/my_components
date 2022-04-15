import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


interface ButtonProps {
    title?: string;
    display?: string;
    margin?: string;
    textAlign?: string;
    padding?: string;
    fontWeight?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    width?: string;
    hover?: {
        backgroundColor?: string;
        color?: string;
    }
    onClick?: () => void;
}

export function Button({ title, display, margin, textAlign, padding, fontWeight, backgroundColor, color, border, borderRadius, width, hover, onClick }: ButtonProps) {

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