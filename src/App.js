import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import Home from "./routes/home/home.component";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
