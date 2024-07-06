import Menu from "../Menu/Menu";
import Heading from "../ui/Heading/Heading";
import StyledFooter from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div>
          <Heading as='h2'>Covid ID</Heading>
          <p>Developed by Yudha Rizky Alvingky</p>
        </div>
        <div>
          <Menu />
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
