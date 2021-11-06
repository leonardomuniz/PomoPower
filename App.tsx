import React, { useContext } from 'react';

import Pomodoro from './src/pages/pomodoro/index';
import { PomodoroProvider } from './src/context/Pomodoro';

export default function App() {

  return (
    <PomodoroProvider>
      <Pomodoro />
    </PomodoroProvider>
  );
}

