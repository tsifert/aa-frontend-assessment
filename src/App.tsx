import React from 'react';
import { Provider } from 'react-redux/es/exports';
import './App.css';
import Main from './components/Main';
import { store } from './features/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
