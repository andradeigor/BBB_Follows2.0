import {
  CardContainer,
  ImageContainer,
  Image,
  CardBottomContainer,
  CardTitle,
  FollowsNumber,
} from "./styled";

const Card: React.FC = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src="https://i.imgur.com/RSjIFyM.jpeg" />
      </ImageContainer>
      <CardBottomContainer>
        <CardTitle>Seguidores</CardTitle>
        <FollowsNumber>1.524.125</FollowsNumber>
      </CardBottomContainer>
    </CardContainer>
  );
};

export default Card;
