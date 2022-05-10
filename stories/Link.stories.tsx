import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, Props } from "../src/components/Link";

const meta: Meta = {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        name: { defaultValue: 'Default Link'},
        href: { defaultValue: 'https://storybook.js.org/docs/react/writing-stories/args' }
    },
}

export default meta;

const Template: Story<Props> = (args) => <Link {...args}/>

export const Default = Template.bind({});

export const Green = Template.bind({});

Green.args = {
    name: 'test',
    href: 'https://storybook.js.org/docs/react/writing-stories/args',
}