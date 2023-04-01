import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import { Footer1 } from "./Pages/Home/Footer1";
import { Navbar1 } from "./Pages/Home/Navbar1";

function App() {
  return (
    <div>
      <Navbar1 />
      <AllRoutes />
      <Footer1 />
    </div>
  );
  }

export default App;
