import Menu from "../Menu/Menu";
import Heading from "../ui/Heading/Heading";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <Heading as='h1'>Covid ID</Heading>
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
