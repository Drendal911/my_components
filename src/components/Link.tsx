import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface Props {
    name: string;
    href: string;
}

export function Link({ href, name }: Props) {

    return (
        <a href={href} css={css``}>{name}</a>
    )
}