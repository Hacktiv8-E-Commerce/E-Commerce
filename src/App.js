import "./App.css";
import { Detail, Dashboard, AdminDashboard } from "./pages/index";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <div className="App">
      <LoginModal />
      <Detail />
      <Dashboard />
      <AdminDashboard />
    </div>
  );
}

export default App;
