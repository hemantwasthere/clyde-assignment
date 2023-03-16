import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
    return (
      user ? <Dashboard/> : <Login/>
    );
}

export default App;
