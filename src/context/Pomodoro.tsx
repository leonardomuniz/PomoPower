import React, { createContext, useState, useContext } from 'react';

type PomodoroContextProviderProps = {
    children: React.ReactNode;
};

const minutes: number = 60;
const PomodoroContext = createContext<any>(null);

function PomodoroProvider({ children }: PomodoroContextProviderProps) {
    const [focusTimer, setFocusTimer] = useState<number>(minutes *25);
    const [restTimer, setRestTimer] = useState<number>(minutes * 5);
    const [longRest, setLongRestTimer] = useState<number>(minutes * 20);
    const [restCycle, setRestCycle] = useState<number>(4);


    return (
        <PomodoroContext.Provider value={{
            focusTimer,
            restTimer,
            longRest,
            restCycle,
            setLongRestTimer,
            setFocusTimer,
            setRestTimer,
            setRestCycle
        }}>
            {children}
        </PomodoroContext.Provider>
    );
};


export { PomodoroProvider, PomodoroContext };