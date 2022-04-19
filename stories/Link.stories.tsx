import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, Props } from "../src/components/Link";
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        onClick: { action: 'Default clicked' },
    },
}

export default meta;

const Template: Story<Props> = (args) => <Link {...args}/>

export const Default = Template.bind({});

export const Green = Template.bind({});

Green.args = {
    onClick: action('Green link clicked'),
    name: 'test',
    href: 'https://storybook.js.org/docs/react/writing-stories/args',
}