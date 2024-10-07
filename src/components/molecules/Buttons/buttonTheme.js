import React from 'react';
import {
  BtnTema,
  OptionSubTextTema,
  ContentTema,
  TextButtonTema,
  OptionRightTema,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export const ButtonTheme = ({ themeStatus }) => {
  const navigation = useNavigation();

  return (
    <BtnTema onPress={() => navigation.navigate('Theme')}>
      <ContentTema>
        <MaterialIcons name="brightness-6" size={24} color="black" />
        <TextButtonTema>Modo Escuro</TextButtonTema>
      </ContentTema>
      <OptionRightTema>
        <OptionSubTextTema>{themeStatus}</OptionSubTextTema>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </OptionRightTema>
    </BtnTema>
  );
};
