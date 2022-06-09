import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const SidebarDefinitive = () => {

  return (
    <Drawer.Navigator
    drawerContent={(props) => <InternMenu {...props}/>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const InternMenu = ({navigation}:DrawerContentComponentProps) => {
 return(
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
        }}
        style={styles.avatar}
        />
      </View>
      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Tabs')} 
        style={{...styles.menuButton,
                flexDirection: 'row'}}>
          <Icon name='compass-outline' size={23} color='black' style={{marginTop: 2}} />
          <Text style={styles.menuText}> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('SettingsScreen')} 
        style={{...styles.menuButton,
          flexDirection: 'row'}}>
          <Icon name='settings-outline' size={23} color='black' style={{marginTop: 2}} />
          <Text style={styles.menuText}> Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
 ) 
}