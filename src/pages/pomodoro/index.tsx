import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';

import Button from '../../components/Button';
import { PomodoroContext } from '../../context/Pomodoro';
import { styles } from '../../styles/globalStyle';
import { playSound, displayTime } from '../../helpers/redux';


export default function Pomodoro() {
    const [timer, setTimer] = useState<string>('');
    const [cycle, setCycle] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [text, setText] = useState<string>('começar');

    const { focusTimer, restTimer } = useContext(PomodoroContext);


    function startFocus() {
        let counter: number = focusTimer;
        setCycle(cycle + 1);
        setIsPaused(true);

        const interval = setInterval(() => {
            setTimer(displayTime(counter));
            counter--;

            if (counter < 0) {
                clearInterval(interval);
                setIsPaused(false);
                playSound();
            }
        }, 1000);

    };

    function startRest() {
        let counter: number;
        cycle === 2 ? counter = 40 : counter = restTimer;
        setIsPaused(true);

        const interval = setInterval(() => {
            setTimer(displayTime(counter));
            counter--;

            if (counter < 0) {
                clearInterval(interval);
                setIsPaused(false);
                playSound();
            };
        }, 1000);
    };

    return (
        <>
            <View style={styles.pomodoro}>
                <Text style={styles.cycle}>{cycle}° Round</Text>
                <Text style={styles.timer}>{timer === '' ? '00:00' : timer}</Text>
                {isPaused ? (
                    <Button buttonText="foco !"/>
                ) : (
                    <Button buttonText="começar" buttonFunction={() => startFocus()} />
                )}

            </View>

            <StatusBar style="auto" />
        </>
    );
}

