import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { header } from '../helpers/Headers';
import Pomodoro from '../pages/pomodoro/index';
import Settings from '../pages/settings/index';
import ToDoList from '../pages/toDoList';

const Tab = createBottomTabNavigator();

export default function TabScreen(): any {
    return (
        <Tab.Navigator initialRouteName='home' screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'home':
                        iconName = 'clock';
                        break
                    case 'settings':
                        iconName = 'settings'
                        break
                    case 'list':
                        iconName = 'check-square'
                }

                return <Icon name={iconName} size={size} color={color} />;
            },

            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
        })} >
            <Tab.Screen name="list" component={ToDoList} options={header} />
            <Tab.Screen name="home" component={Pomodoro} options={header} />
            <Tab.Screen name="settings" component={Settings} options={header} />
        </Tab.Navigator>
    )
}