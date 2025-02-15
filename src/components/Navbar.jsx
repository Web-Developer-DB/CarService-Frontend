import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Fahrzeugverwaltung</h1>
      <div>
        <Link className="px-3" to="/">Login</Link>
        <Link className="px-3" to="/register">Registrieren</Link>
        <Link className="px-3" to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;





