import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageTitle from './components/PageTitle';
import Admin from './pages/Admin';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp.1';
import BillInfo from './pages/BillInfo';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard';
import ECommerce from './pages/Dashboard/ECommerce';
import ManageUsers from './pages/Dashboard/admin/ManageUsers';
import UserDetails from './pages/Dashboard/admin/UserDetails';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Sample from './pages/Sample';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import UserSettings from './pages/UserSettings';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample-reports" element={<Sample />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="/billing-info" element={<BillInfo />} />
        <Route
          path="/dashboard"
          index
          element={
            <>
              <PageTitle title="FameFlow Dashboard | FameFlow - Go Viral With Massive Exposure" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/dashboard/manage-users"
          element={
            <>
              <PageTitle title="Manage Users | FameFlow - Admin Activity" />
              <ManageUsers />
            </>
          }
        />
        <Route
          path="/dashboard/calendar"
          element={
            <>
              <PageTitle title="Calendar | FameFlow - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <>
              <PageTitle title="Profile | FameFlow - Go Viral With Massive Exposure" />
              <Profile />
            </>
          }
        />

        <Route
          path="/dashboard/admin"
          element={
            <>
              <PageTitle title="Profile | FameFlow - Go Viral With Massive Exposure" />
              <Admin />
            </>
          }
        />

        <Route
          path="/dashboard/admin/user/:id"
          element={
            <>
              <PageTitle title="Profile | FameFlow - Go Viral With Massive Exposure" />
              <UserDetails />
            </>
          }
        />

        <Route
          path="/dashboard/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | FameFlow - Go Viral With Massive Exposure" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | FameFlow - Go Viral With Massive Exposure" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | FameFlow - Go Viral With Massive Exposure" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | FameFlow - Go Viral With Massive Exposure" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | FameFlow - Go Viral With Massive Exposure" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | FameFlow - Go Viral With Massive Exposure" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | FameFlow - Go Viral With Massive Exposure" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | FameFlow - Go Viral With Massive Exposure" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | FameFlow - Go Viral With Massive Exposure" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;

{
  /* <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    </BrowserRouter> */
}
