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
        label: { defaultValue: 'Default Button', table: { defaultValue: { summary: 'Default Button' } } },
        display: { defaultValue: 'inline-block', table: { defaultValue: { summary: 'inline-block' } } },
        marginTop: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
        marginRight: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
        marginBottom: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
        marginLeft: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
        padding: { defaultValue: .65, table: { defaultValue: { summary: .65 } } },
        fontWeight: { defaultValue: 'normal', table: { defaultValue: { summary: 'normal' } } },
        backgroundColor: { defaultValue: 'white', table: { defaultValue: { summary: 'white' } } },
        color: { defaultValue: '#79589F', table: { defaultValue: { summary: '#79589F' } } },
        borderStyle: { defaultValue: 'solid', table: { defaultValue: { summary: 'solid' } } },
        borderColor: { defaultValue: '#79589F', table: { defaultValue: { summary: '#79589F' } } },
        borderRadius: { defaultValue: 'semi-rounded', table: { defaultValue: { summary: 'semi-rounded' } } },
        cursor: { defaultValue: 'default', table: { defaultValue: { summary: 'default' } } },
        width: { defaultValue: 'auto', table: { defaultValue: { summary: 'auto' } } },
        height: { defaultValue: 'auto', table: { defaultValue: { summary: 'auto' } } },
        hover: { defaultValue: true, table: { defaultValue: { summary: true } } },
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
