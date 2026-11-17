import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./komponenten/Navigation.tsx";
import Startseite from "./seiten/Startseite.tsx";
import ZielDetail from "./seiten/ZielDetail.tsx";
import Assistent from "./seiten/Assistent.tsx";

function App() {
  return (
    <>
      <header>
        <p>Gatsch oder Gipfel?</p>
        <Navigation />
      </header>

      <main>
        {/* Routes: Welche Adresse zeigt welche Seite */}
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/ziel/:id" element={<ZielDetail />} />
          <Route path="/assistent" element={<Assistent />} />
          {/* Unbekannte Adresse → zurück zur Übersicht */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
