import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
        <Text style={styles.title}>Elige uno y vuelve a Settings</Text>
        <Text>
          <TouchableIcon iconName="bug-outline"/>
          <TouchableIcon iconName="sad-outline"/>
          <TouchableIcon iconName="logo-react"/>
          <TouchableIcon iconName="trash-outline"/>
          <TouchableIcon iconName="cafe-outline"/>
          <TouchableIcon iconName="battery-half-outline"/>
          <TouchableIcon iconName="battery-full-outline"/>
          <TouchableIcon iconName="build-outline"/>
        </Text>
    </View>
  )
}
