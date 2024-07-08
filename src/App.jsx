import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import FindEvents from "./pages/FindEvents";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/find-events" element={<FindEvents />} />
            <Route path="/about-us" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;