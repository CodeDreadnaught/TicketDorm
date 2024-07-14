import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { currentEventLoader } from "./requests/currentEventLoader";
import TriggerAlert from "./utilis/TriggerAlert";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import FindEvents from "./pages/FindEvents";
import About from "./pages/About";
import ViewAllCategoryEvents from "./pages/ViewAllCategoryEvents";
import Event from "./pages/Event";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/find-events" element={<FindEvents />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/all-category-events" element={<ViewAllCategoryEvents />} />
        <Route path="/view-event/:id" element={<Event />} loader={currentEventLoader} errorElement={<TriggerAlert />} />
      </Route>  
  ));

  return (<RouterProvider router={router}/>);
};

export default App;