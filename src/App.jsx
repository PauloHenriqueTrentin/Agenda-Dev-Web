import React, { useState } from 'react';
import Agenda from "./components/Agenda";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  const [activeModule, setActiveModule] = useState('agenda');

  const renderModule = () => {
    switch (activeModule) {
      case 'agenda':
      default:
        return <Agenda />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <main className="main-container">
        {renderModule()} {}
      </main>
    </div>
  );
}

export default App;