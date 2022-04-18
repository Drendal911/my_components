import React, {HTMLAttributes, ReactNode} from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';
    title?: string;
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
    hover?: {
        backgroundColor?: string;
        color?: string;
    }
}

export function Button({ children, variant = 'primary', ...props }: Props) {
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
              :hover {
                background-color: ${props.hover?.backgroundColor};
                color: ${props.hover?.color}
              }
            `
        }>
            {props.title ? props.title : 'Button'}
        </button>
    )
}