import "./App.css";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo.js";

function App() {
  return (
    <div className="App">
      <Header userComponent={<UserInfo />} />
    </div>
  );
}

export default App;
