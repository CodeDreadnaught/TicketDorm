import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import FindEvents from "./pages/FindEvents";
import About from "./pages/About";
import ViewAllCategoryEvents from "./pages/ViewAllCategoryEvents";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/find-events" element={<FindEvents />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/all-category-events" element={<ViewAllCategoryEvents />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;