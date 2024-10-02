import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Return, CustomTitleText, CustomRadioButton } from '../../../components';
import { styles, Container, Header, OptionsContainer } from './styles';
import Check from '../../../../assets/check.png';

export const Theme = () => {
  const [checked, setChecked] = useState('off');
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Return style={styles.back} onPress={() => navigation.navigate('Accessibility')} />
        <CustomTitleText style={styles.title}>Tema</CustomTitleText>
      </Header>
      <OptionsContainer>
        <CustomRadioButton
          style={styles.radioButton}
          value="On"
          status={checked === 'on' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('on')}
          imageSource={Check} // Passe a imagem para o CustomRadioButton
        />
        <CustomRadioButton
          value="Off"
          status={checked === 'off' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('off')}
          imageSource={Check} // Passe a imagem para o CustomRadioButton
        />
      </OptionsContainer>
    </Container>
  );
};
