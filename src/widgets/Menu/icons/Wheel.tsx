import React from "react";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img alt="" {...props} width={24} height={24} src="./images/roulette/roulette.png" />
  );
};

export default Icon;
