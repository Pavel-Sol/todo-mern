// import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Router from './components/Router';
import Navbar from './components/Navbar';
import { auth } from './srore/actions/authActions';

function App() {
  // const currentUser = useSelector((state) => state.authReducer.currentUser);
  // console.log(currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

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
