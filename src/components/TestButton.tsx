import React, { HTMLAttributes } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    title?: string;
    variant?: 'solid'|'bordered';
    display?: 'none'|'inline'|'block'|'inline-block'|'flex'|'grid'|'inline_flex'|'inline-grid'|'initial'|'inherit';
    margin?: number;
    padding?: number;
    fontWeight?: 'normal'|'bold'|'lighter'|'bolder';
    backgroundColor?: string;
    color?: string;
    borderStyle?: 'dotted'|'dashed'|'solid'|'double'|'groove'|'ridge'|'inset'|'outset'|'none'|'hidden';
    borderRadius?: 'square'|'semi-rounded'|'rounded';
    width?: string;
    height?: string;
    hover?: boolean;

}

export function Button({ ...props }: Props) {
    const color = props.color ? props.color : '#79589F';
    const hovers = props.hover ? `:hover {background-color: ${backgroundColor}; color: ${color}} : 'none'};` : null;
}
    const backgroundColor = props.backgroundColor ? props.backgroundColor : 'white';
    let radius;
    if (props.borderRadius === 'square') { radius = 0 }
    else if (props.borderRadius === 'semi-rounded') { radius = .6}
    else if (props.borderRadius === 'rounded') { radius = 10 }

    return(
        <button {...props} css={css`
              display: ${props.display ? props.display : 'inline-block'};
              margin: ${props.margin ? props.margin + 'rem' : 0};
              padding: ${props.padding ? props.padding + 'rem': '.65rem'};
              font-weight: ${props.fontWeight ? props.fontWeight : 'normal'};
              background-color: ${props.backgroundColor ? props.backgroundColor : 'white'};
              color: ${props.color ? props.color : '#79589F'};
              border-radius: ${props.borderRadius ? radius + 'rem' : '.65rem'};
              border: ${props.borderStyle ? props.borderStyle : 'solid #79589F'};
              width: ${props.width ? props.width : 'auto'};
              height: ${props.height ? props.height : 'auto'};
              {hovers}              
            `
        }>
            {props.title ? props.title : 'Button'}
        </button>
    )
}