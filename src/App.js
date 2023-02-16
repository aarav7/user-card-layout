import Navbar from "./Layout/Navbar"
import Main from "./Layout/Main"
import UserProvider from "./Context/UserProvider"

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Main />
    </UserProvider>
  );
}

export default App;
