import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import Home from "./routes/home/home.component";
import Planet from "./routes/planet/planet.component";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/planet">
            <Route path=":planet" element={<Planet />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
