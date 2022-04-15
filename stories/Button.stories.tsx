import { Meta, Story } from '@storybook/react';
import { Button, Props } from "../src/components/Button";


const meta: Meta = {
    title: 'Button',
    component: Button
}

export default meta;

export function Primary() {
    return (
        <Button
            title={'My Button'}
            hover={{
                backgroundColor: '#79589F',
                color: 'white',
            }}
        />
    )
}

export function Secondary() {
    return (
        <Button
            title={'My Button'}
            color={'white'}
            backgroundColor={'#79589F'}
            hover={{
                color: '#79589F',
                backgroundColor: 'white',
            }}
        />
    )
}