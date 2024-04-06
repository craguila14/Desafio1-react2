import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import Contacto from "./views/Contacto";
import "./App.css"
const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
            path="/"
            element={<HomePage />}
          />
        <Route
            path="/contacto"
            element={<Contacto/>}
          />
        <Route
          path="*"
          element={<NotFound/>}
        />

       
      </Routes>
  </div>

  );
};
export default App;
