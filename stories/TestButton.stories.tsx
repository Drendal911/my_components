import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from "../src/components/TestButton";
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
    },
}


export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
    onClick: action('secondary clicked'),
    color: 'green',
    width: 10,
}