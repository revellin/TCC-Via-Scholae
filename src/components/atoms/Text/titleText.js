import React from "react";
import { Text } from 'react-native'
import { TitleText } from './styles';

export const CustomTitleText = ( {children, style} ) => {
    return(
      <TitleText>{children}</TitleText>
    );
}
