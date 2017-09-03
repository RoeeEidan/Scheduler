import React from 'react';
import Home from './Screens/Home.js';
import { StackNavigator } from 'react-navigation';

// Not is use yet.
const Router = StackNavigator({
    Home: {
        screen: Home,
    }
});

export default Router

