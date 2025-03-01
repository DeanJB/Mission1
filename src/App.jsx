import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./components/HomePage/HomePage";

function App() {
      return (
            <Router>
                  <Routes>
                        <Route path="" element={<HomePage />} />
                  </Routes>
            </Router>
      );
}

export default App;
