import { Route, Switch } from 'react-router-dom';
import './App.css';
import CartPage from './App/Pages/CartPage/CartPage';
import ChatPage from './App/Pages/ChatPage/ChatPage';
import CreateProfilePage from './App/Pages/CreateProfilePage/CreateProfilePage';
import HomePage from './App/Pages/HomePage/HomePage';
import InfluencerDetailPage from './App/Pages/InfluencerDetailPage/InfluencerDetailPage';
import InfluencerPage from './App/Pages/InfluencerPage/InfluencerPage';
import LoginPage from './App/Pages/LoginPage/LoginPage';
import RegisterPage from './App/Pages/RegisterPage/RegisterPage'
import ReportPage from './App/Pages/ReportUserPage/ReportUserPage';
import SandBox from './App/Pages/SandBox/SandBox';
import InfluencerMain from './App/Pages/Influencer/InfluencerMain';
import EditInfluencer from './App/Pages/Influencer/InfluencerEdit';
import UserMainPage from './App/Pages/Users/UserMainPage';
import AdminMain from './App/Pages/Admin/AdminMain';
import AdminUpdateUserPage from './App/Pages/Admin/AdminUpdateUserPage';


function App() {

 
   
  return (
    <div className="App">
      {/* <Navbar  admin/users/${users._id}/edit /> */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/influencer' exact component={InfluencerPage} />
        <Route path ='/influencer-profile-detail/:id' component={InfluencerDetailPage} />
        <Route path='/create-profile' component={CreateProfilePage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/report-influencer/:keyword' component={ReportPage} />
        <Route path='/chat-users/:id' component={ChatPage} />
        <Route path='/influencer-profile/:id' component={InfluencerMain} />
        <Route path='/editprofile/:id' component={EditInfluencer} />
        <Route path='/user-profile/:id' component={UserMainPage} />
        <Route path='/manage-admin-panel' component={AdminMain} />
        <Route path='/admin/users/:id/edit' component={AdminUpdateUserPage} />
        <Route path='/sand' component={SandBox} />
       </Switch>
    </div>
  );
}

export default App;
