import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Page1Screen = ({navigation}:Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
        title='Menú'
        onPress={() => navigation.toggleDrawer()}
        />
      ) 
    }) 
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>

      <Button
        title="Ir a Page2Screen"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 50
      }}>NAVEGAR CON ARGUMENTOS</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: 'blue'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'María',
            })
          }>
          <Text style={styles.bigButtonText}>María</Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        title="Ir a Personcreen"
        onPress={() => navigation.navigate('PersonScreen')}
        /> */}
    </View>
  );
}
