import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";

import Bp from "./components/Bp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Vowels />

      <Bp />
    </>
  );
}

export default App;
