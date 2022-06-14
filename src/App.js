import "./App.css";
import Adress from "./composant/Adress";
import FullName from "./composant/FullName";
import ProfilePhoto from "./composant/ProfilePhoto";
function App() {
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
