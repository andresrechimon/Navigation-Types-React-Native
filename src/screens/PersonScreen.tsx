import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

// interface RouteParams{
//     id:number;
//     name:string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

export const PersonScreen = ({route, navigation}:Props) => {

//   const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
      headerBackTitle: '' //For IOS. If empty, it will render "back" in language selected from the device
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            {
                JSON.stringify(params, null, 3)
            }    
        </Text>
    </View>
  )
}
