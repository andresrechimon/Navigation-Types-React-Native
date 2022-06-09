import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor: 'white',
    }}
    screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary
        },
        tabBarLabelStyle: {
            fontSize: 15
        },
        tabBarIcon: (props) => {
 
            let iconName: string = '';
                switch(route.name) {
                    case 'Tab1Screen' :
                        iconName = 'flash-outline'
                    break;
 
                    case 'Tab2Screen' :
                        iconName = 'trail-sign-outline'
                    break;
 
                    case 'StackNavigator' :
                        iconName = 'people-circle-outline'
                    break;
                }
                return <Icon name={iconName} size={20} color={colors.primary} />
        }
    })}
    >
      <Tab.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <Tab.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}