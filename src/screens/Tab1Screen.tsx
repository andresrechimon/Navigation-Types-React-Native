import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="bug-outline" size={80} color="#900" />
          <Icon name="sad-outline" size={80} color="#900" />
          <Icon name="logo-react" size={80} color="#900" />
          <Icon name="trash-outline" size={80} color="#900" />
          <Icon name="cafe-outline" size={80} color="#900" />
          <Icon name="battery-half-outline" size={80} color="#900" />
          <Icon name="battery-full-outline" size={80} color="#900" />
          <Icon name="build-outline" size={80} color="#900" />
        </Text>
    </View>
  )
}
