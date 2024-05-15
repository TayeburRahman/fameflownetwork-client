import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminRoute from './PrivateRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PageTitle from './components/PageTitle';
import Admin from './pages/Admin';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import BillInfo from './pages/BillInfo';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard';
import ECommerce from './pages/Dashboard/ECommerce';
import AdminDetails from './pages/Dashboard/admin/AdminDetails';
import ManageUsers from './pages/Dashboard/admin/ManageUsers';
import SampolReports from './pages/Dashboard/admin/report/SampolReports';
import Package from './pages/Dashboard/admin/report/package/Package';
import PublicationDetails from './pages/Dashboard/users/PublicationDetails';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import UserSettings from './pages/UserSettings';
import OrderLayout from './pages/orders/OrderLayout';
import Orders from './pages/orders/Orders';
import Payment from './pages/orders/Payment';
import Review from './pages/orders/Review';
import LandingPage from './pages/report/LandingPage';

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
        {/* <Route path="/sample-reports" element={<Sample />} /> */}
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/user-dashboard/settings" element={<UserSettings />} />
        <Route path="/user-dashboard/billing-reports" element={<BillInfo />} />

        <Route
          path="/dashboard"
          index
          element={
            <AdminRoute>
              <PageTitle title="FameFlow Dashboard | FameFlow - Go Viral With Massive Exposure" />
              <ECommerce />
            </AdminRoute>
          }
        />

        <Route
          path="/dashboard/admin"
          element={
            <AdminRoute>
              <PageTitle title="Profile | FameFlow - Go Viral With Massive Exposure" />
              <Admin />
            </AdminRoute>
          }
        />

        <Route
          path="/dashboard/admin/user/:id"
          element={
            <AdminRoute>
              <PageTitle title="Profile | FameFlow - Go Viral With Massive Exposure" />
              <AdminDetails />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/sample-reports"
          element={
            <AdminRoute>
              <PageTitle title="Form Elements | FameFlow - Go Viral With Massive Exposure" />
              <SampolReports />
            </AdminRoute>
          }
        />

        <Route
          path="/dashboard/r/:name"
          element={
            <AdminRoute>
              <PageTitle title="Form Elements | FameFlow - Go Viral With Massive Exposure" />
              <Package />
            </AdminRoute>
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
          path="/user-dashboard/profile"
          element={
            <PrivateRoute>
              <PageTitle title="Profile | FameFlow - Go Viral With Massive Exposure" />
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-dashboard/user/:id/publication"
          element={
            <PrivateRoute>
              <PageTitle title="Profile | FameFlow - Go Viral With Massive Exposure" />
              <PublicationDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/packages/order"
          element={
            <>
              <PageTitle title="Tables | FameFlow - Go Viral With Massive Exposure" />
              <Tables />
            </>
          }
        />

        <Route path="/packages" element={<OrderLayout />}>
          <Route index path="order" element={<Orders />} />
          <Route path="review" element={<Review />} />
          <Route path="payment" element={<Payment />} />
        </Route>

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
          path="/dashboard/tables"
          element={
            <>
              <PageTitle title="Tables | FameFlow - Go Viral With Massive Exposure" />
              <Tables />
            </>
          }
        />

        <Route
          path="/dashboard/settings"
          element={
            <>
              <PageTitle title="Settings | FameFlow - Go Viral With Massive Exposure" />
              <Settings />
            </>
          }
        />
        <Route
          path="/dashboard/chart"
          element={
            <>
              <PageTitle title="Basic Chart | FameFlow - Go Viral With Massive Exposure" />
              <Chart />
            </>
          }
        />

        <Route
          path="/reports/:name"
          element={
            <>
              <PageTitle title="Report | FameFlow - Go Viral With Massive Exposure" />
              <LandingPage />
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
