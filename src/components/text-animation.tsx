import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  text: Array<string | number>;
}

const TextAnimation = ({ text }: Props) => {
  return (
    <TypeAnimation
      sequence={text}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={19}
    />
  );
};

export default TextAnimation;
