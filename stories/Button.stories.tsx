import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from "../src/components/Button";
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'Default button clicked' },
    },
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

export const Default = Template.bind({});

export const Green = Template.bind({});

Green.args = {
    onClick: action('Green button clicked'),
    color: 'green',
    width: 10,
}