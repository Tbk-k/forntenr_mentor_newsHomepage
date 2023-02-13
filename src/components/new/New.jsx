import React from "react";
import { Wrapper } from "./New.styles";
import NewItem from "./newItem/NewItem";

const New = () => {
  const news = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Downside of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      content:
        "Privete funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <Wrapper>
      <h2>New</h2>
      {news.map(({ id, title, content }) => (
        <NewItem key={id} title={title} content={content} />
      ))}
    </Wrapper>
  );
};

export default New;
