import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

  const {logOut, authState} = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
    <Text style={styles.title}>AlbumsScreen</Text>
    {
      authState.isLoggedIn ? <Button title="Log Out" onPress={logOut}/> : null
    }
    </View>
  )
}
