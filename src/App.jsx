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
import ProtectedRoutes from "./utilis/ProtectedRoutes";
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
        <Route path="/checkout-page" element={<CheckoutPage />}  />
        <Route element={<ProtectedRoutes />}>

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