import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import ClubContainer from './containers/ClubContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ClubContainer />
      </div>
    </Provider>
  );
}

export default App;
