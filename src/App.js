import "./App.css";
import { Detail, Dashboard, AdminDashboard } from "./pages/index";
import { LoginModal, HeaderAdmin } from "./components/index";

function App() {
  return (
    <div className="App">
      <LoginModal />
      <Detail />
      <Dashboard />
      <HeaderAdmin />
      <AdminDashboard />
    </div>
  );
}

export default App;
