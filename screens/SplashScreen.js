import React, { useEffect} from 'react';
import {ActivityIndicator,View,StyleSheet,Image } from 'react-native';
import logo from './../assets/logo.png'
import {widthToDP,heightToDP} from './../utils/responsive'

const SplashScreen = ({navigation}) => {
  
useEffect(() => {
    setTimeout(() => {
     navigation.replace('LoginScreen')
    }, 5000);
  }, []);




  return (
    <View style={styles.container}>
     
      <Image
        source={logo}
        style={{width: widthToDP(100), resizeMode: 'contain', margin: widthToDP(10)}}
      />
     
      <ActivityIndicator
       
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
   height: heightToDP(10),
  },
});