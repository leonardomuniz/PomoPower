import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabScreen from './TabScreen';
import {header} from '../helpers/Headers';
import { ThemeContext } from '../context/Themes';

const Stack = createNativeStackNavigator();


export default function Routes() {
    const {themes, isDarkMode} = useContext(ThemeContext);

    return (
        <NavigationContainer theme={isDarkMode? themes.dark: themes.light}>
            <Stack.Navigator>
                <Stack.Screen name="mainTab" component={TabScreen}  options={header}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};