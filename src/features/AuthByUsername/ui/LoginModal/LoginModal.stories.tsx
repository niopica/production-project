import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModalStories',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
