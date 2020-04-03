import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/cakeStore';
import CakeContainer from './component/CakeContainer';
import HooksReact from './component/HooksReact';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksReact/>
      </div>
    </Provider>
  );
}

export default App;
