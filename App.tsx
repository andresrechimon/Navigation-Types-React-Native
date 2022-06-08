import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SidebarDefinitive } from './src/navigator/SidebarDefinitive';
// import { Sidebar } from './src/navigator/Sidebar';
// import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <Sidebar/> */}
      <SidebarDefinitive/>
    </NavigationContainer>
  )
}

export default App;