import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface Props extends HTMLLinkElement {
    name: string;
    href: string;
}

export function Link({ href, name }: Props) {

    return (
        <a href={href} css={css``} target={"_blank"} rel={'noreferrer noopener'}>{name}</a>
    )
}