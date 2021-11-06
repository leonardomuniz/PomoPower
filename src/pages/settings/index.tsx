import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput } from 'react-native';

import { styles } from '../../styles/globalStyle';
import { PomodoroContext } from '../../context/Pomodoro';
import Button from '../../components/Button';


export default function Settings() {
    const [focus, setFocus] = useState<any>(0);
    const [rest, setRest] = useState<any>(0);
    const [pause, setPause] = useState<any>(0);
    const [cycle, setCycle] = useState<any>(0);
    const [text, setText] = useState<string>('salvar');


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

    function changeSettings() {
        setFocusTimer(focus === 0 ? focusTimer : focus * 60 );
        setRestTimer(rest === 0 ? restTimer : rest * 60);
        setLongRestTimer(pause === 0 ? longRest : pause * 60);
        setRestCycle(cycle === 0 ? restCycle : cycle * 60);
 
        setText('alterações feitas!')
        setFocus(0);
        setRest(0);
        setPause(0);
        setCycle(0);
    };

    return (
        <ScrollView style={styles.settings}>
            <View style={styles.staticBody}>
                <View style={styles.formBox}>
                    <Text style={styles.textInfo}>Tempo de foco:</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        keyboardType='numeric'
                        placeholder={`${focusTimer / 60} min`}
                        onChangeText={setFocus}
                    />
                </View>
                <View style={styles.formBox}>
                    <Text style={styles.textInfo}>Descanço curto:</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        keyboardType='numeric'
                        placeholder={`${restTimer / 60} min`}
                        onChangeText={setRest}
                    />
                </View>
                <View style={styles.formBox}>
                    <Text style={styles.textInfo}>Descanço longo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        keyboardType='numeric'
                        placeholder={`${longRest / 60} min`}
                        onChangeText={setPause}
                    />
                </View>
                <View style={styles.formBox}>
                    <Text style={styles.textInfo}>Número de ciclos:</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        keyboardType='numeric'
                        placeholder={`${restCycle}`}
                        onChangeText={setCycle}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <Button buttonText={text} buttonFunction={changeSettings} />
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    )
}