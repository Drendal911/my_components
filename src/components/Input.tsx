import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface Props {
    /** Set the label text */
    labelText?: string;
    /** Set the text color of the label */
    color?: string;
    /** Set the background-color of the label */
    backgroundColor?: string;
    /** Set the for attribute of the label */
    for?: string;
    /** Set the name of the input field */
    inputName?: string;
    /** Set the type of input */
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    /** Set the default value of the input field */
    value?: string;
    /** Set the input field to read-only */
    readonly?: boolean;
    /** Set the label's top margin */
    labelMarginTop?: number,
    /** Set the label's right margin */
    labelMarginRight?: number,
    /** Set the label's bottom margin */
    labelMarginBottom?: number,
    /** Set the label's left margin */
    labelMarginLeft?: number,
}

export function Input( {...props}: Props ) {

    return (
        <>
            <label {...props} htmlFor={props.inputName} css={css`
              color: ${props.color};
              background-color: ${props.backgroundColor};  
              margin-top: ${props.labelMarginTop}rem;
              margin-right: ${props.labelMarginRight}rem;
              margin-bottom: ${props.labelMarginBottom}rem;
              margin-left: ${props.labelMarginLeft}rem;      
            `
            }>
                {props.labelText}
            </label>
            <input name={props.inputName}
                   type={props.type}
                   value={props.value}
            />
        </>
    )
}