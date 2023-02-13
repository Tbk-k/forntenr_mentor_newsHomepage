import React from "react";
import Retro from "../../assets/img/image-retro-pcs.jpg";
import Laptop from "../../assets/img/image-top-laptops.jpg";
import Game from "../../assets/img/image-gaming-growth.jpg";
import { Wrapper } from "./Posts.style";
import Post from "./post/Post";

const Posts = () => {
  const items = [
    {
      id: 1,
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
      img: Retro,
    },
    {
      id: 2,
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs ang budgets.",
      img: Laptop,
    },
    {
      id: 3,
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
      img: Game,
    },
  ];
  return (
    <Wrapper>
      {items.map((props) => (
        <Post key={props.id} {...props} />
      ))}
    </Wrapper>
  );
};

export default Posts;
