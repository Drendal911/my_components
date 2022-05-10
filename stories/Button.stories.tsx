import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from "../src/components/Button";
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component: 'This is an adjustable button.',
            },
        },
    },
    argTypes: {
        onClick: { action: 'Default button clicked' },
        label: { defaultValue: 'Default Button' },
        display: { defaultValue: 'inline-block' },
        marginTop: { defaultValue: 0 },
        marginRight: { defaultValue: 0 },
        marginBottom: { defaultValue: 0 },
        marginLeft: { defaultValue: 0 },
        padding: { defaultValue: .65 },
        fontWeight: { defaultValue: 'normal' },
        backgroundColor: { defaultValue: 'white' },
        color: { defaultValue: '#79589F' },
        borderStyle: { defaultValue: 'solid' },
        borderColor: { defaultValue: '#79589F' },
        borderRadius: { defaultValue: 'semi-rounded' },
        cursor: { defaultValue: 'default' },
        width: { defaultValue: 'auto' },
        height: { defaultValue: 'auto' },
        hover: { defaultValue: true },
    },
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

export const Default = Template.bind({});

export const SolidDefault = Template.bind({});
SolidDefault.args = {
    onClick: action('Solid Default button clicked'),
    label: 'Solid Button',
    color: 'white',
    backgroundColor: '#79589F',
}
