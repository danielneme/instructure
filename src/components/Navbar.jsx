import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>React MySQL</h1>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create task</Link>
        </li>  
        <li>
          <Link to="/regiones">Regiones</Link>
          <Link to="/regionnew">Regiones</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;