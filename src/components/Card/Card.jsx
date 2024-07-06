import Heading from "../ui/Heading/Heading";
import StyledCard from "./Card.styled";

function Card(props) {
  const { title, value } = props;

  const format = (input, type) => {
    if (type === "value") {
      const num = Number(input);
      if (!isNaN(num)) {
        return num.toLocaleString("id-ID");
      }
      return input;
    } else if (type === "title") {
      return input
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  };

  return (
    <StyledCard>
      <section>
        <div className='card__body'>
          <Heading as='h2'>{format(title, "title")}</Heading>
          <p>{format(value, "value")}</p>
        </div>
      </section>
    </StyledCard>
  );
}

export default Card;
