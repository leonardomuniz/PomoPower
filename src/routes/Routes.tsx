import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabScreen from './TabScreen';
import {header} from '../helpers/Headers';

const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="mainTab" component={TabScreen}  options={header}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};