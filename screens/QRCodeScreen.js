import React, { useState } from 'react';
import {  StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import {api} from './../utils/urlconfig'

function QRCodeScreen() {
  const route = useRoute();
  const { companyid, offerid } = route.params
  const navigation = useNavigation();
  const [barcodes, setbarCodes] = useState(false)
  const [showCamera, setShowCamera] = useState(true)
  const [scan, setScan] = useState()

  
  const auth = useSelector((state) => state.auth);
 

  console.log(auth.loginUser.username)

  const onSuccess = (e) => {
    

    if (e.data) {
      alert("QR code scanned")
      setScan(false);
      console.log('QR code scanned!', e)
     axios.put(`${api}/setpurchaseoffer/${companyid}/${offerid}/${auth.loginUser.id}`,{events:'purchase',buyer:auth.loginUser.username})
     .then((res)=>{
       console.log(res)
     })
     .catch((err)=>{
       console.log(err)
     })
    }


  }

  const handleClose = () => {
    setScan(false)
    //navigation.replace("DetailScreen")
  }

  return (
    <View style={{ flex: 1 }}>

     <QRCodeScanner
        reactivate={true}
        showMarker={true}
        fadeIn={true}

        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Scan your QRCode!
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={handleClose}>
            <Text style={styles.buttonText}>Cancel Scan</Text>
          </TouchableOpacity>
        }
      />
    </View>
  )
}

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});