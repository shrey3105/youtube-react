import React from "react";
import { BUTTON_LIST } from "../utils/constants";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="py-2 px-5">
      {BUTTON_LIST.map((btn, index) => (
        <Button key={index} name={btn}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
