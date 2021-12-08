import React from 'react';
import {Provider} from 'react-redux';
import Text from './src/components/View/Text';
import View from './src/components/View/View';
import {ThemeProvider} from './src/Hooks/useTheme';
import AppRoot from './src/navigation';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoot>
          <Text>Theming will be implemented</Text>
        </AppRoot>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
