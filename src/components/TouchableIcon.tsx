import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props{
    iconName:string;
}

export const TouchableIcon = ({iconName}:Props) => {

  const {favoriteIcon} = useContext(AuthContext)

  return (
    <TouchableOpacity
    onPress={() => favoriteIcon(iconName)}
    >
        <Icon 
        name={iconName} 
        size={80} 
        color="#900" />
    </TouchableOpacity>
  )
}
