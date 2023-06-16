import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;