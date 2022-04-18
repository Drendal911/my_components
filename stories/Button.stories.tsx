import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from "../src/components/Button";
// import { Meta, Story } from '@storybook/react';
// import { Button, Props } from "../src/components/Button";


const meta: Meta = {
    title: 'Components/Button',
    component: Button
}

export default meta;

export function Primary() {
    return (
        <Button
            btn={{
                title: 'Primary Button',
                hover: {
                    backgroundColor: '#79589F',
                    color: 'white',
                }
            }}

        />
    )
}

