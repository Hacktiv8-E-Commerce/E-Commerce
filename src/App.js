import "./App.css";
import LoginModal from "./components/LoginModal";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="App">
      <LoginModal />
      <Detail />
      <Dashboard />
    </div>
  );
}

export default App;
