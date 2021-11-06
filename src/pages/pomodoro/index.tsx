import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import Button from '../../components/Button';
import { usePomodoro } from '../../context/Pomodoro';
import { styles } from '../../styles/globalStyle';


export default function Pomodoro() {
    const [timer, setTimer] = useState<string>('');
    const [cycle, setCycle] = useState<number>(0);
    const [working, setWorking] = useState<boolean>(true);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [sound, setSound] = useState<any>();


    const { focusTimer, restTimer } = usePomodoro();

    let interval: number | any;

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            working ? require('./boxing-bell.mp3') : require('./alarm-clock.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }


    function startFocus() {
        let counter: number = focusTimer;
        setCycle(cycle + 1);
        setIsPaused(true);

        interval = setInterval(() => {
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

        interval = setInterval(() => {
            setTimer(displayTime(counter));
            counter--;

            if (counter < 0) {
                clearInterval(interval);
                setWorking(true);
                setIsPaused(false);
                playSound()
            };
        }, 1000);
    };

    function displayTime(seconds: number): string {
        const minute = Math.floor(seconds / 60);
        const second = Math.floor(seconds % 60);

        return `${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;
    };



    return (
        <>
            {working ? (
                <View style={styles.working}>
                    <MaterialIcons name="work-outline" size={80} color="white" />
                    <Text style={styles.cycle}>{cycle}° Round</Text>
                    <Text style={styles.timer}>{timer === '' ? '00:00' : timer}</Text>
                    {isPaused ? (
                        <Button buttonText={(<FontAwesome5 name="pause" size={30} color="red" />)} />
                    ) : (
                        <Button buttonText={(<FontAwesome5 name="play" size={30} color="red" />)} buttonFunction={() => startFocus()} />
                    )}

                </View>
            ) : (
                <View style={cycle === 2 ? styles.longRest : styles.relax}>
                    <AntDesign name="rest" size={80} color="white" />
                    <Text></Text>
                    <Text style={styles.cycle}>{cycle === 2 ? 'Descanço longo' : `${cycle}° Round`}</Text>
                    <Text style={styles.timer}>{timer === '' ? '00:00' : timer}</Text>
                    {isPaused ? (
                        <Button buttonText={(<FontAwesome5 name="pause" size={30} color={cycle === 2 ? 'blue' : 'green'} />)} />
                    ) : (
                        <Button buttonText={(<FontAwesome5 name="play" size={30} color="green" />)} buttonFunction={() => startRest()} />
                    )}
                </View>
            )}


            <StatusBar style="auto" />
        </>
    );
}

