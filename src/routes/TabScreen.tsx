import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import { header, headerScreen } from '../helpers/Headers';
import Pomodoro from '../pages/pomodoro/index';
import Settings from '../pages/settings/index';

export default function TabScreen(): any {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Pomodoro} options={header} />
            <Tab.Screen name="Settings" component={Settings} options={headerScreen} />
        </Tab.Navigator>
    )
}