import HeroImage from "./assets/undraw_medical_care_movn.svg";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import Heading from "../ui/Heading/Heading";

function Hero() {
  return (
    <StyledHero>
      <section>
        <div className='hero__left'>
          <Heading as='h2'>Covid ID</Heading>
          <Heading as='h3'>Monitoring Perkembangan Covid</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            inventore non maxime sint eligendi totam esse aut officia quod
            eveniet nemo minus sapiente assumenda possimus vitae, nulla est!
            Quo, nihil.
          </p>
          <Button>Vaccine</Button>
        </div>
        <div className='hero__right'>
          <img src={HeroImage} alt='placeholder' />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
