import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

export const SidebarDefinitive = () => {

  return (
    <Drawer.Navigator
    drawerContent={(props) => <InternMenu {...props}/>}
    >
      <Drawer.Screen name="StackNavigator"  component={StackNavigator} />
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
        onPress={() => navigation.navigate('StackNavigator')} 
        style={styles.menuButton}>
          <Text style={styles.menuText}>StackNavigator</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('SettingsScreen')} 
        style={styles.menuButton}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
 ) 
}