import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Login } from './login.component';

export default {
  component: Login,
  title: 'Login',
} as Meta;

const Template: Story = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
