
import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Page2Screen = () => {

  const navigator = useNavigation();

  //Override title
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '' //For IOS. If empty, it will render "back" in language selected from the device
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page2Screen</Text>
        <Button
        title="Ir a Page3Screen"
        onPress={() => navigator.navigate('Page3Screen' as never)}
        />
    </View>
  )
}
