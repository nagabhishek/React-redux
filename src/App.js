import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/cakeStore';
import CakeContainer from './component/CakeContainer';
import HooksReact from './component/HooksReact';
import IceCreamContainer from './component/IceCreamContainer';
import ItemContainer from './component/ItemContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        {/* <HooksReact/> */}
      </div>
    </Provider>
  );
}

export default App;
