import React from 'react';
import './App.css';
import Background from './components/background/Background';
import Counter from "./components/counter/Counter";
import {store} from './redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Background />
        <Counter />
      </div>
    </Provider>
    
  );
}

export default App;
