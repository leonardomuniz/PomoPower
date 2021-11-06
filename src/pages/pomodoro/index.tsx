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
    const [working, setWorking] = useState<boolean>(true);
    const [isPaused, setIsPaused] = useState<boolean>(false);

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
                setWorking(false);
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
                setWorking(true);
                setIsPaused(false);
                playSound();
            };
        }, 1000);
    };

    return (
        <>
            {working ? (
                <View style={styles.working}>
                    <Text style={styles.cycle}>{cycle}° Round</Text>
                    <Text style={styles.timer}>{timer === '' ? '00:00' : timer}</Text>
                    {isPaused ? (
                        <Button iconName="pause" iconSize={30} iconColor="red" />
                    ) : (
                        <Button iconName="play" iconSize={30} iconColor="red" buttonFunction={() => startFocus()} />
                    )}

                </View>
            ) : (
                <View style={cycle === 2 ? styles.longRest : styles.relax}>
                    
                    <Text></Text>
                    <Text style={styles.cycle}>{cycle === 2 ? 'Descanço longo' : `${cycle}° Round`}</Text>
                    <Text style={styles.timer}>{timer === '' ? '00:00' : timer}</Text>
                    {isPaused ? (
                        <Button iconName="pause" iconSize={30} iconColor={cycle === 2 ? 'blue' : 'green'}/>
                    ) : (
                        <Button iconName="play" iconSize={30} iconColor="green" buttonFunction={() => startRest()} />
                    )}
                </View>
            )}


            <StatusBar style="auto" />
        </>
    );
}

