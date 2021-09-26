import "./App.css";
import Employees from "./components/Employee/Employees";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      {/* rendering header and employees components */}
      <Header></Header>
      <Employees></Employees>
    </>
  );
}

export default App;
