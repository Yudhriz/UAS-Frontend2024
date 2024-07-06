import Heading from "../ui/Heading/Heading";
import StyledAbout from "./About.styled";

function About() {
  return (
    <>
      <StyledAbout>
        <Heading as='h1'>About</Heading>
        <p>
          Welcome to our application! Our goal is to provide accurate and
          up-to-date information about the COVID-19 situation around the world.
          This application allows you to:
        </p>
        <ul>
          <li>View the latest COVID-19 data by country and province.</li>
          <li>Submit new data about COVID-19 cases.</li>
          <li>Stay informed about the overall global and local situation.</li>
        </ul>
        <p>
          Our team is dedicated to ensuring the accuracy and reliability of the
          data presented. We gather information from trusted sources and update
          our database regularly to provide you with the most recent figures.
        </p>
        <p>
          We hope this application helps you stay informed and safe during these
          challenging times. If you have any questions or feedback, please do
          not hesitate to contact us.
        </p>
      </StyledAbout>
    </>
  );
}

export default About;
