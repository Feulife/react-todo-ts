import React from "react";
import {Link} from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div>
      <Link to="/">
        ToDo React TypeScript
      </Link>
      <ul>
        <li>
          <Link to="/">
            ToDo list
          </Link>
        </li>        
      </ul>
    </div>
  </nav>
)