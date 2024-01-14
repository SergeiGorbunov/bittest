// @ts-expect-error
import Header from "./components/Header";
// @ts-expect-error
import Dashboard from "./widjets/Dashboard";
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
