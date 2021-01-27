import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './App/Layouts/Navbar/Navbar';
import LoginPage from './App/Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
