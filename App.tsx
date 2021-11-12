import React from 'react';

import { PomodoroProvider } from './src/context/Pomodoro';
import { ThemeProvider } from './src/context/Themes';
import Routes from './src/routes/Routes';

export default function App() {

  return (
    <PomodoroProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </PomodoroProvider>
  );
}

