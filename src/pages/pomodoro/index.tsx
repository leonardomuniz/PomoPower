import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 

import Button from '../../components/Button';
import { PomodoroContext } from '../../context/Pomodoro';
import { styles } from '../../styles/globalStyle';
import { playSound, displayTime } from '../../helpers/redux';


export default function Pomodoro() {
    const [timer, setTimer] = useState<number>(10);
    const [display, setDisplay] = useState<string>('');
    const [cycle, setCycle] = useState<number>(1);
    const [working, setWorking] = useState<boolean>(false);

    const { focusTimer, restTimer } = useContext(PomodoroContext);

    
    useEffect(() => {
        let interval: any = null;
        
        if(working){
            let counter: number = timer;
    
            interval = setInterval(() => {
                setTimer(previousTime => previousTime - 1);
                counter--;
    
                if (counter <= 0) {
                    setWorking(false);
                    setCycle(cycle + 1);
                    playSound();
                };
            }, 1000);
        } else {
            clearInterval(interval);
        };

        return () => clearInterval(interval);
    }, [working]);

    useEffect(()=>setDisplay(displayTime(timer)), [timer]);



    return (
        <>
            <View style={styles.pomodoro}>
                <Text style={styles.cycle}>{cycle % 2 == 0? 'Foco': 'Descanço'}</Text>
                <Text style={styles.timer}>{display === '' ? '00:00': display}</Text>
                {working ? (
                    <View style={styles.showCase}>
                        <Button buttonText={<FontAwesome5 name="pause" size={40} color="black" />} buttonFunction={() => setWorking(false)}  />
                        <Button buttonText={<MaterialCommunityIcons name="restart" size={40} color="black" />} buttonFunction={() => setTimer(25)}  />
                    </View>
                ) : (
                    <Button buttonText={<FontAwesome5 name="play" size={40} color="black" />} buttonFunction={() => {setWorking(true); setTimer(timer === 0 ? 10: timer)}} />
                )}

            </View>

            <StatusBar style="auto" />
        </>
    );
}

