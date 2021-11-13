import React, { createContext, useState } from 'react';

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

const themes = {
    light: {
        dark: false,
        colors: {
            primary: '#e62200',
            notification: '#d9d9d9',
            background: '#f2f2f2',
            card: '#f2f2f2',
            text: '#171717',
            border: '#f2f2f2',

        },
    },
    dark: {
        dark: true,
        colors: {
            primary: '#e62200',
            notification: '#383838',
            background: '#171717',
            card: '#171717',
            text: '#f2f2f2',
            border: '#171717'
        },
    }
}


const ThemeContext = createContext<any>(themes);

function ThemeProvider({ children }: ThemeContextProviderProps) {
    const [isDarkMode, setIsDarkMode] = useState<any>(false);
    return (
        <ThemeContext.Provider value={{ themes, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};


export { ThemeProvider, ThemeContext };