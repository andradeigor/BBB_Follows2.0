import React, { useState } from "react";
import { MainContainer, MainWraper } from "./styled";
import Card from "../Card/Card";

interface IProfile {
  id: number;
  name: string;
  follows: number;
  imageUrl: string;
}
const Main: React.FC = ({}) => {
  const [profiles, setProfiles] = useState<Array<IProfile>>([
    {
      id: 1,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 2,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 3,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 4,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 5,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 6,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 7,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 8,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 9,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 10,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 11,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
    {
      id: 12,
      name: "Gil",
      follows: 1564268,
      imageUrl: "https://i.imgur.com/RSjIFyM.jpeg",
    },
  ]);
  return (
    <MainContainer>
      <MainWraper>
        {profiles.map((profile) => (
          <Card />
        ))}
      </MainWraper>
    </MainContainer>
  );
};

export default Main;
