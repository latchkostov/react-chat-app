import React from 'react';
import { action } from '@storybook/addon-actions';
import Menu from '../components/menu/menu.component';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'Menu',
    component: Menu,
};

export const Text = () => (<MemoryRouter initialEntries={['/']}>
    <Menu></Menu>
</MemoryRouter>);