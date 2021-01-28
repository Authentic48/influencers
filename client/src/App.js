import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './App/Layouts/Navbar/Navbar';
import HomePage from './App/Pages/HomePage/HomePage';
import InfluencerPage from './App/Pages/InfluencerPage/InfluencerPage';
import LoginPage from './App/Pages/LoginPage/LoginPage';
import RegisterPage from './App/Pages/RegisterPage/RegisterPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/influencer' exact component={InfluencerPage} />
      </Switch>
    </div>
  );
}

export default App;
