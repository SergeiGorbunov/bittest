import Header from "./components/Header/Header.tsx";
import Dashboard from "./widjets/Dashboard/Dashboard.jsx";
import Drawer from "./widjets/Drawer/Drawer.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Drawer />
    </div>
  );
};
export default App;
