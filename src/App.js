import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
import Mens from "./Pages/Fashion/Mens";
import Womens from "./Pages/Fashion/Womens";
import { Footer1 } from "./Pages/Home/Footer1";
import { Navbar1 } from "./Pages/Home/Navbar1";


function App() {
  return (
    <div>
      <Navbar1 />
      <AllRoutes />
      <Womens/>
      {/* <Mens/> */}
      <Footer1 />
  
    </div>
  );
  }

export default App;
