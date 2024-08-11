import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { currentEventLoader } from "./requests/currentEventLoader";
import TriggerAlert from "./utilis/TriggerAlert";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import FindEvents from "./pages/FindEvents";
import About from "./pages/About";
import ViewAllCategoryEvents from "./pages/ViewAllCategoryEvents";
import Event from "./pages/Event";
import SignUp from "./pages/SiginUp";
import SignIn from "./pages/SiginIn";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import CheckEmail from "./pages/CheckEmail";
import ResetPassword from "./pages/ResetPassword";
import CheckoutPage from "./pages/CheckoutPage";
import VerifyTicketPayment from "./pages/VerifyTicketPayment";
import CreateEvent from "./pages/CreateEvent";
import MobileSearchBar from "./components/MobileSearchBar";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utilis/ProtectedRoutes";
import ProtectedTokenRoutes from "./utilis/ProtectedTokenRoutes";
import ProtectedPaymentRoute from "./utilis/ProtectedPaymentRoute";
import ProtectedOTPRoute from "./utilis/ProtectedOTPRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/find-events" element={<FindEvents />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/all-category-events" element={<ViewAllCategoryEvents />} />
        <Route path="/view-event/:id" element={<Event />} loader={currentEventLoader} errorElement={<TriggerAlert />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-password/:id" element={<ResetPassword />}  />
        <Route path="/checkout-page/:id" element={<CheckoutPage />} loader={currentEventLoader} errorElement={<TriggerAlert />} />
        <Route path="/search" element={<MobileSearchBar />}  />
        <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}  />
        </Route>
        <Route element={<ProtectedTokenRoutes />}>
        <Route path="/sell-tickets" element={<CreateEvent />} />
        </Route>
        <Route element={<ProtectedPaymentRoute />}>
        <Route path="/verify-payment/:callback-reference" element={<VerifyTicketPayment />}  />
        </Route>
        <Route element={<ProtectedOTPRoute />}>
          <Route path="/verify-otp" element={<VerifyOTP />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>  
  ));

  return (<RouterProvider router={router}/>);
};

export default App;