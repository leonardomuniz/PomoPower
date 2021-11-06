import React from 'react';

import { PomodoroProvider } from './src/context/Pomodoro';
import Routes from './src/routes/Routes';

export default function App() {

  return (
    <PomodoroProvider>
      <Routes />
    </PomodoroProvider>
  );
}

