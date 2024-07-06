import StyledMenu from "./Menu.styled";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <StyledMenu>
      <li>
        <Link to='/'>Global</Link>
      </li>
      <li>
        <Link to='/indonesia'>Indonesia</Link>
      </li>
      <li>
        <Link to='/provinsi'>Provinsi</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </StyledMenu>
  );
}

export default Menu;
