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
    /** Choose border-radius */
    borderRadius?: 'square'|'semi-rounded'|'rounded';
    cursor?: 'auto'|'default'|'none'|'context-menu'|'help'|'pointer'|'progress'|'wait'|'cell'|'crosshair'|'text'|'vertical-text'|'alias'|'copy'|'move'|'no-drop'|'not-allowed'|'e-resize'|'n-resize'|'ne-resize'|'nw-resize'|'s-resize'|'se-resize'|'sw-resize'|'w-resize'|'ew-resize'|'ns-resize'|'nesw-resize'|'nwse-resize'|'col-resize'|'row-resize'|'all-scroll'|'zoom-in'|'zoom-out'|'grab'|'grabbing';
    /** Set rem width of the button ex. "auto" OR 1 etc. */
    width?: number|string;
    /** Set rem height of the button ex. "fit-content" OR 1 etc. */
    height?: number|string;
    /** Turn hover status on or off */
    hover?: boolean;
}

export function Button({ label = 'Button',
                           display = 'inline-block',
                           marginTop = 0,
                           marginRight = 0,
                           marginBottom = 0,
                           marginLeft = 0,
                           padding = .65,
                           fontWeight = 'normal',
                           backgroundColor = 'white',
                           color = '#79589F',
                           borderStyle = 'solid',
                           borderRadius = 'semi-rounded',
                           cursor = 'default',
                           width = 'auto',
                           height = 'fit-content',
                           hover = true,
                           ...props }: Props) {

    const hoverStatus = hover && `:hover {background-color: ${color}; color: ${backgroundColor}};`;
    let radius;
    if (borderRadius === 'square') { radius = 0 }
    else if (borderRadius === 'semi-rounded') { radius = .6}
    else if (borderRadius === 'rounded') { radius = 10 }

    const newWidth = typeof width === 'string' ? `${width}` : `${width}rem`;
    const newHeight = typeof width === 'string' ? `${height}` : `${height}rem`;

    return(
        <button {...props} css={css`
              display: ${display};
              margin-top: ${`${marginTop}rem`};
              margin-right: ${`${marginTop}rem`};
              margin-bottom: ${`${marginTop}rem`};
              margin-left: ${`${marginTop}rem`};
              padding: ${`${padding}rem`};
              font-weight: ${fontWeight};
              background-color: ${backgroundColor};
              color: ${color};
              border-radius: ${`${radius}rem`};
              border: ${`${borderStyle} ${color}`};
              cursor: ${cursor};
              width: ${newWidth};
              height: ${newHeight};
              ${hoverStatus}             
            `
        }>
            {label}
        </button>
    )
}