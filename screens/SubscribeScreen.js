import React,{useEffect, useState} from "react"
import {Text, Checkbox,Image, NativeBaseProvider, Button, Box } from "native-base"
import {View,ScrollView,TouchableOpacity,StyleSheet,FlatList, VirtualizedList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux'
import axios from "axios";
import { heightToDP, widthToDP } from "../utils/responsive";
import { backgroundColor } from "styled-system";
//import { getSubSpecCatAllComp} from "./../store/actions/offerAction";
import {api} from './../utils/urlconfig'
export const SuccessScreen = () => {

  //const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const navigation = useNavigation(); 
  const [purchaseoffer,setPurchasedoffer]=useState([])

  const [state, setState] = useState({
   agree: false,
  })


  
  const agreeChange=(val)=>{
    console.log(val)
    setState({
        ...state,
        agree:val
    })
    if (validateOnChange) {
      validateForm();
    }
  };

  useEffect(()=>{
    axios.get(`${api}/displaymypurchaseoffer/${auth.loginUser.id}`)
    .then((res)=>{
      console.log(res.data)
      setPurchasedoffer(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  
  console.log("purchase",purchaseoffer)

  const renderItem = ({ item }) => (<View >
   
      <View style={{flex:1,width:140,height:140}}>
      <Image source={{uri:item.thumbnail? item.thumbnail:null}} alt="image base"  roundedTop="md" style={{flex:1,marginTop:widthToDP(1),resizeMode: 'cover',width:"100%",height:"100%"}}  />
      </View>
     
    
 </View>);




 
  return (
    <View style={{flex:1, margin:heightToDP(2)}}>
   
      <View  style={{flex:1}}>

          <View  style={styles.container} >
               <View  style={styles.subscribebtntxt}>
                 <Text>I am currently subscribed to </Text>
              </View>
              <View  style={styles.subscribebtntxt}>
                  <Button  onPress={()=>navigation.navigate("DashboardScreen")}>Done</Button>
               </View>
          </View>




          <View  style={{flex:5}}>
             {purchaseoffer>0?
             <View style={{flex:1,alignItems:'center',}}>
               < FlatList
                 data={purchaseoffer}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                 numColumns={2}
                 horizontal={false}
                 
                />
                </View>:
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
               <Text style={{alignItems:'center',justifyContent:'center'}}>You have not Subscribed any Offer</Text>
             </View>}
          </View>

       </View>
       
 
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  subscribebtntxt:{
    flex: 1 ,
    justifyContent:'center',
    alignItems:'center'
  },
  maintext:{
   flex:1,
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
   flexWrap:'wrap',
   margin:widthToDP(2)
  },
  imageView:{
    margin:3,
    width: 140,
    height: 140,
    aspectRatio: 1 * 1.4,

  },
  imageStyle:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  }
  
});

export default () => {
  return (
    <NativeBaseProvider>
     
        <SuccessScreen />
      
    </NativeBaseProvider>
  )
}
