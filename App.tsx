import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {  Text, View } from 'react-native';
import { MaterialIcons , AntDesign } from '@expo/vector-icons';

import Button from './src/components/Button';
import {styles} from './src/styles/globalStyle';


export default function App() {
  const [timer, setTimer] = useState<number | string>(0);
  const [cycle, setCycle] = useState<number>(0);
  const [rest, setRest] = useState<number | string>(0);
  const [working, setWorking] = useState<boolean>(true);

  function startTimer(seconds: number):void {
    let counter:number = seconds;

    const interval = setInterval(() => {
      setTimer(displayTime(counter));
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        setWorking(false);
        //startPause(5);
      }
    }, 1000);
  };

  function startPause(seconds: number):void {
    let counter:number = seconds;

    const pause = setInterval(() => {
      setRest(displayTime(counter));
      counter--;

      if (counter < 0) {
        clearInterval(pause);
        setWorking(true);
      }
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
          <Text style={styles.timer}>{timer == 0 ? '00:00': timer}</Text>
          <Button buttonText="Começar" buttonFunction={() => {
            startTimer(10)
            setCycle(cycle + 1)
          }} />
        </View>
      ) : (
        <View style={styles.relax}>
          <AntDesign name="rest" size={80} color="white" />
          <Text></Text>
          <Text style={styles.cycle}>{cycle}° Round</Text>
          <Text style={styles.timer}>{rest == 0 ? '00:00': rest}</Text>
          <Button buttonText="Pausa"  buttonFunction={() => startPause(10)} />
        </View>
      )}


      <StatusBar style="auto" />
    </>
  );
}

