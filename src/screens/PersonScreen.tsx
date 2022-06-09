import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect, useContext} from 'react'
import { View, Text, Button } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams{
//     id:number;
//     name:string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

export const PersonScreen = ({route, navigation}:Props) => {

  const {changeUsername} = useContext(AuthContext)

//   const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
      headerBackTitle: '' //For IOS. If empty, it will render "back" in language selected from the device
    })
  }, [])

  useEffect(() => {
    changeUsername(params.name)
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
