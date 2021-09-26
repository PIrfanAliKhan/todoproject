import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="nav">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        
        <br/>
          <Link className="nav-link" to="/add">
            Add
          </Link>
        <br/>
          <Link className="nav-link" to="/view">
            View
          </Link>
        
        <br/>
      </ul>
    </div>
  );
}
