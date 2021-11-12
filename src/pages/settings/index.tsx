import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../../styles/globalStyle';
import { PomodoroContext } from '../../context/Pomodoro';
import { ThemeContext } from '../../context/Themes';


export default function Settings() {
    const { colors } = useTheme();
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

    const [focus, setFocus] = useState<any>(0);
    const [rest, setRest] = useState<any>(0);
    const [pause, setPause] = useState<any>(0);
    const [cycle, setCycle] = useState<any>(0);
    const [isEnabled, setIsEnabled] = useState<boolean>(isDarkMode);


    async function toggleSwitch() {
        setIsEnabled(previousState => !previousState);
        setIsDarkMode(!isDarkMode);

        try {
            await AsyncStorage.setItem('@darkMode', isDarkMode.toString());
        } catch (error) {
            console.log(error);
        };
    };



    const {
        focusTimer,
        restTimer,
        longRest,
        restCycle,
        setLongRestTimer,
        setFocusTimer,
        setRestTimer,
        setRestCycle
    } = useContext(PomodoroContext);

    async function changeSettings() {
        setFocusTimer(focus === 0 ? focusTimer : focus * 60);
        setRestTimer(rest === 0 ? restTimer : rest * 60);
        setLongRestTimer(pause === 0 ? longRest : pause * 60);
        setRestCycle(cycle === 0 ? restCycle : cycle * 60);

        try {
            await AsyncStorage.setItem('@focus', focus === 0 ? focusTimer.toString() : (focus * 60).toString());
            await AsyncStorage.setItem('@rest', rest === 0 ? restTimer.toString() : (rest * 60).toString());

            console.log('deu tudo certo!');
        } catch (erro) {
            return console.log(erro);
        };
    };



    return (
        <ScrollView style={styles.settings}>
            <View style={styles.staticBody}>
                <View style={styles.formBox}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.text }}>Tempo de foco:</Text>
                    <TextInput
                        style={{ fontSize: 20, backgroundColor: colors.background, color: colors.text }}
                        placeholderTextColor={colors.text}
                        keyboardType='numeric'
                        placeholder={`${focusTimer / 60}`}
                        onChangeText={setFocus}
                    />
                </View>
                <View style={styles.formBox}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.text }}>Descanço curto:</Text>
                    <TextInput
                        style={{ fontSize: 20, backgroundColor: colors.background, color: colors.text }}
                        placeholderTextColor={colors.text}
                        keyboardType='numeric'
                        placeholder={`${restTimer / 60}`}
                        onChangeText={setRest}
                    />
                </View>
                <View style={styles.formBox}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.text }}>Descanço longo:</Text>
                    <TextInput
                        style={{ fontSize: 20, backgroundColor: colors.background, color: colors.text }}
                        placeholderTextColor={colors.text}
                        keyboardType='numeric'
                        placeholder={`${longRest / 60}`}
                        onChangeText={setPause}
                    />
                </View>
                <View style={styles.formBox}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.text }}>Número de ciclos:</Text>
                    <TextInput
                        style={{ fontSize: 20, backgroundColor: colors.background, color: colors.text }}
                        placeholderTextColor={colors.text}
                        keyboardType='numeric'
                        placeholder={`${restCycle}`}
                        onChangeText={setCycle}
                    />
                </View>
                <View style={styles.formBox}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.text }}>Modo escuro:</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: colors.text }}
                        thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => changeSettings()}>
                    <Text style={{
                        fontSize: 30,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        color: colors.text
                    }}>Salvar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    )
}