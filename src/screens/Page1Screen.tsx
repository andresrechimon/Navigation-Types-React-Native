import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles, colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Page1Screen = ({navigation}:Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
        style={{
          marginLeft: 10
        }}
        onPress={() => navigation.toggleDrawer()}
        >
          <Icon name="menu-outline" size={35} color={colors.primary}/>
        </TouchableOpacity>
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
          <Icon name="body-outline" size={35} color='white'/>
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
            <Icon name="body-outline" size={35} color='white'/>
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
