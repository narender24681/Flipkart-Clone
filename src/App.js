import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
import Mens from "./Pages/Fashion/Mens";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Mens/>
    </div>
  );
}

export default App;
