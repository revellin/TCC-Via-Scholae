import React from "react";
import { BtnContinue, BtnContinueText } from './styles';


export const ButtonContinue = ({ onPress, children }) => {
  return (
    <BtnContinue onPress={onPress}>
      <BtnContinueText>{children}</BtnContinueText>
    </BtnContinue>
  );
};

