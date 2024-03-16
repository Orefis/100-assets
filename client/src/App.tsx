import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import SideMenu from "./Components/Sidebar/Siedebar";

function App() {
  return (
    <div className="App">
      {/* TODO: dodać routing dla tych podstron oraz stworzyc policyTerms dla rejestracji */}
      {/* <LoginPage></LoginPage> */}
      {/* <RegisterPage></RegisterPage> */}
      <SideMenu></SideMenu>
    </div>
  );
}

export default App;
