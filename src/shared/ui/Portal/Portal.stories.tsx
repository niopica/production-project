import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Portal } from './Portal';

export default {
    title: 'shared/Portal',
    component: Portal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = (args) => <Portal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
