import Navbar from "./components/Navbar"
import Main from "./components/Main"
import UserProvider from "./context/UserProvider"

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Main />
    </UserProvider>
  );
}

export default App;
