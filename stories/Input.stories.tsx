import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from "../src/components/Input";

const meta: Meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        docs: {
            description: {
                component: 'This is an input field.',
            },
        },
    },
    argTypes: {
        labelText: { defaultValue: 'Default Label', table: { defaultValue: { summary: 'Default Label' } } },
        color: { devaultValue: '#79589F', table: { defaultValue: { summary: '#79589F' } } },
        backgroundColor: { devaultValue: 'white', table: { defaultValue: { summary: 'white' } } },
        inputName: { defaultValue: 'Default Input', table: { defaultValue: { summary: 'Default Input' } } },
        type: { defaultValue: 'text', table: { defaultValue: { summary: 'text'} } },
        value: { devaultValue: '#79589F', table: { defaultValue: { summary: 'Default Button' } } },
        readonly: { devaultValue: '#79589F', table: { defaultValue: { summary: 'Default Button' } } },
        labelMarginTop: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
        labelMarginRight: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
        labelMarginBottom: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
        labelMarginLeft: { defaultValue: 0, table: { defaultValue: { summary: 0 } } },
    },
}

export default meta;

const Template: Story<Props> = (args) => <Input {...args}/>

export const Default = Template.bind({});


