import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import CoinContext from "./context/CoinContext";
function App() {
  return (
   <>
   <CoinContext>
     <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
   </CoinContext>
   </>
  );
}

export default App;
