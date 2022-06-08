import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Page3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page3Screen</Text>
        <Button
        title="Regresar a la Page anterior (2)"
        onPress={() => navigation.pop()}
        />
        <Button
        title="Volver a Page1Screen"
        onPress={() => navigation.popToTop()}
        />
    </View>
  )
}
