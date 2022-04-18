import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';



interface ButtonProps {
    btn?: {
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
}


export function Button({ btn }: ButtonProps) {
// export function Button({ title, display, margin, textAlign, padding, fontWeight, backgroundColor, color, border, borderRadius, width, height, hover, onClick }: ButtonProps) {



    return(
        <>
            <button onClick={btn?.onClick} css={css`
              display: ${btn?.display ? btn?.display : 'inline-block'};
              margin: ${btn?.margin ? btn?.margin : '1rem'};
              text-align: ${btn?.textAlign ? btn?.textAlign : 'center'};
              padding: ${btn?.padding ? btn?.padding : '.65rem'};
              font-weight: ${btn?.fontWeight ? btn?.fontWeight : 'bold'};
              background-color: ${btn?.backgroundColor ? btn?.backgroundColor : 'white'};
              color: ${btn?.color ? btn?.color : '#79589F'};
              border-radius: ${btn?.borderRadius ? btn?.borderRadius : '.65rem'};
              border: ${btn?.border ? btn?.border : 'solid #79589F'};
              width: ${btn?.width ? btn?.width : 'auto'};
              height: ${btn?.height ? btn?.height : 'auto'};
              :hover {
                background-color: ${btn?.hover?.backgroundColor};
                color: ${btn?.hover?.color}
              }
            `
            }>
                {btn?.title ? btn?.title : 'Button'}
            </button>
        </>

    )
}