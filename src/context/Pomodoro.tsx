import React, { createContext, useState, useContext } from 'react';

type PomodoroContextProviderProps = {
	children: React.ReactNode;
};
const focusTimer:number = 10;
const restTimer:number = 10;

const PomodoroContext = createContext({focusTimer, restTimer});

export function PomodoroProvider({children}:PomodoroContextProviderProps){

    return (
        <PomodoroContext.Provider value ={{focusTimer, restTimer}}>
            {children}
        </PomodoroContext.Provider>
    );
};

export function usePomodoro(){
    const {focusTimer, restTimer} = useContext(PomodoroContext);

    if(!{focusTimer, restTimer}) throw new Error('usePomodoro must be used inside a PomodoroProvider');

    return {focusTimer, restTimer};
}

