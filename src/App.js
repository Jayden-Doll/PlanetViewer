import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import Home from "./routes/home/home.component";
import Planet from "./routes/planet/planet.component";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/planet">
          <Route path=":planet" element={<Planet />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
