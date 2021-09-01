import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Router from './components/Router';
import Navbar from './components/Navbar/Navbar';
import { auth } from './srore/actions/authActions';

function App() {
  console.log('rerender App');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
