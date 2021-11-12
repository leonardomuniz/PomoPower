import React, { createContext } from 'react';

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

const themes = {
    light:{
        dark: false,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: '#f2f2f2',
            card: '#fff',
            text: '#171717',
            border: '#f2f2f2',
            notification: 'rgb(255, 69, 58)',
          },
    }
}


const ThemeContext = createContext<object>(themes);

function ThemeProvider({children}: ThemeContextProviderProps){
    return(
        <ThemeContext.Provider value={themes}>
            {children}
        </ThemeContext.Provider>
    );
};


export {ThemeProvider, ThemeContext};