import { Route, Routes } from "react-router-dom";
import "./App.css";
import Corazonarte from "./Pages/Corazonarte/Corazonarte";
import Directory from "./Pages/Directory/Directory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/corazonarte" element={<Corazonarte />} />
        <Route path="/directorio-cultural" element={<Directory />} />
        <Route path="*" element={<Corazonarte />} />
      </Routes>
    </>
  );
}

export default App;
