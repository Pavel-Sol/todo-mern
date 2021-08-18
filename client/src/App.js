import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Router from './components/Router';
import Navbar from './components/Navbar/Navbar';
import { auth } from './srore/actions/authActions';
import { getTodo } from './srore/actions/todoActions';

function App() {
  const currentUser = useSelector((state) => state.authReducer.currentUser);

  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTodo(currentUser.id));
  }, [currentUser, dispatch]);

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
