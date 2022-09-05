import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Planet from "./routes/planet/planet.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/planet" element={<Planet />}></Route>
    </Routes>
  );
}

export default App;
