import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ROUTES } from "./constants/ROUTES";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home.path} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.about.path} element={<About />} />
          <Route path={ROUTES.delivery.path} element={<Delivery />} />
          <Route path={ROUTES.delivery.path} element={<Delivery />} />
          <Route path={ROUTES.register.path} element={<Register />} />
          <Route path={ROUTES.login.path} element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
