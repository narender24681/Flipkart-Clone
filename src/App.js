import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
import Mens from "./Pages/Fashion/Mens";
import Womens from "./Pages/Fashion/Womens";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <AllRoutes />
      <Womens/>
      {/* <Mens/> */}
    </div>
  );
}

export default App;
