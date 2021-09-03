import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Router from './components/Router/Router';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import { auth } from './srore/actions/authActions';

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.authReducer.isFetching);

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        {isFetching && <Loader />}
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
