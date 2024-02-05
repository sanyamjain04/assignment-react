import "./App.css";
import { HomeNavbar } from "./layouts/HomeNavbar";
import JokeSection from "./sections/JokeSection";

function App() {
  return (
    <div className="max-w-md mx-auto">
      <HomeNavbar />
      <JokeSection />
    </div>
  );
}

export default App;
