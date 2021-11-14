import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import Button from '../../components/Button';
import { PomodoroContext } from '../../context/Pomodoro';
import { styles } from '../../styles/globalStyle';
import { playSound, displayTime } from '../../helpers/redux';


export default function Pomodoro() {
    const { focusTimer, restTimer, restCycle, longRest } = useContext(PomodoroContext);
    const { colors } = useTheme();

    const [timer, setTimer] = useState<number>(0);
    const [display, setDisplay] = useState<string>('');
    const [cycle, setCycle] = useState<number>(0);
    const [isRest, setIsRest] = useState<boolean>(false);
    const [working, setWorking] = useState<boolean>(false);

    function handleTimer(){
        if (timer === 0 ){
            if ( isRest === true) {
                cycle === restCycle ? setTimer(longRest) : setTimer(restTimer) 
            } else {
                setTimer(focusTimer) 
            }
        } else {
            setTimer(timer);
        };
    };

    useEffect(() => {
        let interval: any = null;

        if (working) {
            let counter: number = timer;

            interval = setInterval(() => {
                setTimer(previousTime => previousTime - 1);
                counter--;

                if (counter <= 0) {
                    setWorking(false);
                    setIsRest(!isRest);
                    isRest === false ? setCycle(cycle + 1): null;
                    playSound();
                };
            }, 1000);
        } else {
            clearInterval(interval);
        };

        return () => clearInterval(interval);
    }, [working]);

    useEffect(() => setDisplay(displayTime(timer)), [timer]);

    useEffect(() => setTimer(focusTimer), [focusTimer]);

    return (
        <>
            <View style={styles.pomodoro}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.text }}># {cycle}</Text>
                <Text style={{ fontSize: 55, fontWeight: 'bold', color: colors.text }}>{isRest ? 'DESCANÇO' : 'FOCO !'}</Text>
                <Text style={{ fontSize: 125, fontWeight: 'bold', color: colors.text }}>{display === '' ? '00:00' : display}</Text>
                {working ? (
                    <View style={styles.showCase}>
                        <Button buttonText={<FontAwesome5 name="pause" size={40} color={colors.primary} />} buttonFunction={() => setWorking(false)} />
                        <Button buttonText={<MaterialCommunityIcons name="restart" size={40} color={colors.primary} />} buttonFunction={() => setTimer(focusTimer)} />
                    </View>
                ) : (
                    <Button
                        buttonText={<FontAwesome5 name="play" size={40} color={colors.primary} />}
                        buttonFunction={() => {
                            setWorking(true);
                            handleTimer();
                        }} />
                )}

            </View>

            <StatusBar style="auto" />
        </>
    );
};

