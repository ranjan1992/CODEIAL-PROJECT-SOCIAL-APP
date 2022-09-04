import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useAuth } from '../hooks';
import {
  Home,
  Login,
  Signup,
  Settings,
  UserProfile,
  NotFound,
  PrivateRoute,
} from '../pages';
import { Loader, Navbar } from './';

function App() {
  const auth = useAuth();

  console.log('auth', auth);
  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/settings" element={<PrivateRoute />}>
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route path="/user/:userId" element={<PrivateRoute />}>
            <Route path="/user/:userId" element={<UserProfile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
