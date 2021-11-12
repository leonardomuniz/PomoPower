import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TabScreen from './TabScreen';
import { header } from '../helpers/Headers';
import { ThemeContext } from '../context/Themes';
import { PomodoroContext } from '../context/Pomodoro';

const Stack = createNativeStackNavigator();


export default function Routes() {
    const { themes, isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const { setFocusTimer, setRestTimer } = useContext(PomodoroContext);

    useEffect(() => {
        (async () => {
            const focus = await AsyncStorage.getItem('@focus');
            const rest = await AsyncStorage.getItem('@rest');
            const darkMode = await AsyncStorage.getItem('@darkMode');

            
            
            setFocusTimer(Number(focus));
            setRestTimer(Number(rest));

            darkMode === 'true' ? setIsDarkMode(false) : setIsDarkMode(true);
        })();
    }, []);

    return (
        <NavigationContainer theme={isDarkMode ? themes.dark : themes.light}>
            <Stack.Navigator>
                <Stack.Screen name="mainTab" component={TabScreen} options={header} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};