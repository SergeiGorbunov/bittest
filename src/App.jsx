import Header from "./components/Header/Header.tsx";
import Dashboard from "./widjets/Dashboard/Dashboard.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
};
export default App;
