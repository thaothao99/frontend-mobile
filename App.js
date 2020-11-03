import * as React from 'react';
import NavigationApp from './Nagivation';
import { Provider as PaperProvider } from 'react-native-paper';

function App() {

  return (
    <PaperProvider >
      <NavigationApp></NavigationApp>
    </PaperProvider>
  )
}

export default App;