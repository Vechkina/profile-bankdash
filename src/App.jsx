import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/mainContent/MainContent";

import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header setOpen={setOpen} isOpen={isOpen} />
      <div className="main-wrapper">
        <Sidebar isOpen={isOpen} />
        <MainContent />
      </div>
    </>
  );
}

export default App;
