import React,{useEffect} from "react"
import {Center,NativeBaseProvider} from "native-base"
import {View,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

export const SuccessScreen = () => {
  const navigation = useNavigation(); 


  // useEffect(()=>{
    
  // setTimeout(() => {
  //     navigation.push("LoginScreen")
  //   }, 1000);

  // },[])
  return (
    <View flex={1} justifyContent="center">
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Icon
           name="check-circle" size={100} color='blue'
         />
        <Text>
           You have successfully created account
        </Text>
       </View>
    </View>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <SuccessScreen />
     
    </NativeBaseProvider>
  )
}

