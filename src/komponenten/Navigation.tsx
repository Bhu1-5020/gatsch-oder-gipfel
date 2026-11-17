import { NavLink } from "react-router-dom";

// Hauptmenü. NavLink wechselt die Seite ohne Neuladen
// und markiert den aktiven Link automatisch mit der Klasse "active".
function Navigation() {
  return (
    <nav aria-label="Hauptnavigation">
      <ul>
        <li>
          <NavLink to="/">Übersicht</NavLink>
        </li>
        <li>
          <NavLink to="/assistent">Ausflugs-Assistent</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
