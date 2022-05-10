import React, { HTMLAttributes } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Set text displayed inside the button */
    label?: string;
    /** Choose display type */
    display?: 'none'|'inline'|'block'|'inline-block'|'flex'|'grid'|'inline_flex'|'inline-grid'|'initial'|'inherit';
    /** Set margin-top */
    marginTop?: number;
    /** Set margin-right */
    marginRight?: number;
    /** Set margin-bottom */
    marginBottom?: number;
    /** Set margin-left */
    marginLeft?: number;
    /** Set padding */
    padding?: number;
    /** Choose font-weight */
    fontWeight?: 'normal'|'bold'|'lighter'|'bolder';
    /** Set background-color */
    backgroundColor?: string;
    /** Set color */
    color?: string;
    /** Choose border-style */
    borderStyle?: 'dotted'|'dashed'|'solid'|'double'|'groove'|'ridge'|'inset'|'outset'|'none'|'hidden';
    /** Chose border-color */
    borderColor?: string;
    /** Choose border-radius */
    borderRadius?: 'square'|'semi-rounded'|'rounded';
    cursor?: 'auto'|'default'|'none'|'context-menu'|'help'|'pointer'|'progress'|'wait'|'cell'|'crosshair'|'text'|'vertical-text'|'alias'|'copy'|'move'|'no-drop'|'not-allowed'|'e-resize'|'n-resize'|'ne-resize'|'nw-resize'|'s-resize'|'se-resize'|'sw-resize'|'w-resize'|'ew-resize'|'ns-resize'|'nesw-resize'|'nwse-resize'|'col-resize'|'row-resize'|'all-scroll'|'zoom-in'|'zoom-out'|'grab'|'grabbing';
    /** Set rem width of the button ex. "auto" OR 1 etc. */
    width?: 'max-content' | 'min-content' | 'auto' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
    /** Set rem height of the button ex. "fit-content" OR 1 etc. */
    height?: 'max-content' | 'min-content' | 'auto' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
    /** Turn hover status on or off */
    hover?: boolean;
}

export function Button( {...props }: Props ) {
    const hoverStatus = props.hover &&
        `:hover {background-color: ${props.color};
        color: ${props.backgroundColor}};
     `;
    let radius;
    if (props.borderRadius === 'square') { radius = 0 }
    else if (props.borderRadius === 'semi-rounded') { radius = .6}
    else if (props.borderRadius === 'rounded') { radius = 10 }

    return(
        <button {...props} css={css`
              display: ${props.display};
              margin-top: ${`${props.marginTop}rem`};
              margin-right: ${`${props.marginRight}rem`};
              margin-bottom: ${`${props.marginBottom}rem`};
              margin-left: ${`${props.marginLeft}rem`};
              padding: ${`${props.padding}rem`};
              font-weight: ${props.fontWeight};
              background-color: ${props.backgroundColor};
              color: ${props.color};
              border-radius: ${`${radius}rem`};
              border-color: ${props.borderColor};  
              border: ${props.borderStyle};
              cursor: ${props.cursor};
              width: ${props.width};
              height: ${props.height};
              ${hoverStatus}             
            `
        }>
            {props.label}
        </button>
    )
}