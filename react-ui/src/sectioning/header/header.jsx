import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div>
        {" "}
        <NavLink to="/">home</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/quotecalculator">quotecalculator</NavLink>
        </li>
        <li>
          <NavLink to="/listofquotes">listofquotes</NavLink>
        </li>
        <li>
          <NavLink to="/quotedetails">quotedetails</NavLink>
        </li>
        <li>
          <NavLink to="/aboutme">aboutme</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
