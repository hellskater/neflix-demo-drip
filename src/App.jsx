import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

import "./App.scss";
import useMetaMaskConnect from "./hooks/useMetamaskConnect";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  useMetaMaskConnect();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tv/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
