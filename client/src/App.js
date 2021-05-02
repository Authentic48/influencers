import { Route, Switch } from "react-router-dom";
import CartPage from "./App/Pages/CartPage/CartPage";
import ChatPage from "./App/Pages/ChatPage/ChatPage";
import CreateProfilePage from "./App/Pages/CreateProfilePage/CreateProfilePage";
import HomePage from "./App/Pages/HomePage/HomePage";
import InfluencerDetailPage from "./App/Pages/InfluencerDetailPage/InfluencerDetailPage";
import InfluencerPage from "./App/Pages/InfluencerPage/InfluencerPage";
import LoginPage from "./App/Pages/LoginPage/LoginPage";
import RegisterPage from "./App/Pages/RegisterPage/RegisterPage";
import ReportPage from "./App/Pages/ReportUserPage/ReportUserPage";
import SandBox from "./App/Pages/SandBox/SandBox";
import InfluencerMain from "./App/Pages/Influencer/InfluencerMain";
import EditInfluencer from "./App/Pages/Influencer/InfluencerEdit";
import UserMainPage from "./App/Pages/Users/UserMainPage";
import AdminMain from "./App/Pages/Admin/AdminMain";
import AdminControlUser from "./App/Pages/Admin/AdminControlUser";
import AdminControlInfluencer from "./App/Pages/Admin/AdminControlInfluencer";
import AdminControlReports from "./App/Pages/Admin/AdminControlReports";
import OrderPage from "./App/Pages/OrderPage";
import SelectPaymentPage from "./App/Pages/SelectPaymentPage";
import PlaceOrderPage from "./App/Pages/PlaceOrderPage";
import Navbar from "./App/Layouts/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/cart" component={CartPage} />
        {/* influencer Page Route public   */}
        <Route path="/influencer" exact component={InfluencerPage} />
        <Route path="/influencer/search/:keyword/" component={InfluencerPage} />
        <Route path="/influencer/page/:pageNumber" component={InfluencerPage} />
        <Route
          path="/influencer/search/:keyword/page/:pageNumber"
          component={InfluencerPage}
        />
        {/* influencer Pages Route Private  influencer  */}
        <Route
          path="/influencer-profile-detail/:id"
          component={InfluencerDetailPage}
        />
        <Route path="/influencer-profile/:id" component={InfluencerMain} />
        <Route path="/editprofile/:id" component={EditInfluencer} />
        <Route path="/create-profile" component={CreateProfilePage} />

        <Route path="/report-influencer/:id" component={ReportPage} />
        <Route path="/chat-users/:id" component={ChatPage} />
        <Route path="/user-profile/:id" component={UserMainPage} />
        {/* order pages */}
        <Route path="/order/:keyword/:id" component={OrderPage} />
        <Route path="/user/selectPayment" component={SelectPaymentPage} />
        <Route path="/placeOrder/:keyword" component={PlaceOrderPage} />
        {/* Admin Page Route    */}
        <Route path="/manage-admin-panel" component={AdminMain} />
        <Route path="/admin-manage-reports" component={AdminControlReports} />
        <Route path="/admin/users/:id/edit" component={AdminControlUser} />
        <Route
          path="/admin-manage-influencer"
          component={AdminControlInfluencer}
        />
        {/* Sand Box    */}
        <Route path="/sand" component={SandBox} />
      </Switch>
    </div>
  );
}

export default App;
