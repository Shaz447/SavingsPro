import React,{useState} from "react"
import { Input,Checkbox,Icon,FormControl,Image,NativeBaseProvider,Button,Link} from "native-base"
import { useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ToastAndroid} from "react-native"
import logo from './../assets/logo.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { isEmpty ,isEmail } from "validator";
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import axios from 'axios'
import * as types from './../store/actions/types';
import {widthToDP} from './../utils/responsive'
import {api} from './../utils/urlconfig'

export const LoginScreen = () => {

  const navigation = useNavigation(); 
  const dispatch = useDispatch()
  
  const [state,setState] =useState({
    
    email:'',
    password:'',
   
  })
  const [icEye, seticEye] = useState('eye-slash');
  const [showpassword,setShowPassword] =useState()
  const [rememberMe,setRememberMe] =useState()
  const [errors,setErrors] =useState({
    email:'',
    password:'',
    })
  
  const [validateOnChange,setvalidateOnChange]=useState(false)


  
  const emailChange=(val)=>{
    
    setState({
        ...state,
        email:val
    })
    if (validateOnChange) {
      validateForm();
    }
  };

   const passwordChange=(val)=>{
  
     setState({
      ...state,
      password:val
    })
   if (validateOnChange) {
    validateForm();
   }
  };


  console.log(api)
const validateForm = () => {
  let { email,password } = state;
  let  errors = {email:"",password:""}  ;
  let valid = true;

  if (isEmpty(email) || !isEmail(email)) {
    
    errors.email = "Please provide a valid email address";
    valid = false;
  }

  if (isEmpty(password) || password.length < 8) {
    errors.password = "Passowrd should be at least 8 characters long";
    valid = false;
  }

  setErrors(errors);
  
  return valid;
};


const handleSubmit = () => {
  console.log("pressed")
   if (validateForm()) {
    let user={
      
      email:state.email,
      password:state.password,
      
  
    }
    
    
    axios.post(`${api}/login`,user).
    then(res=>{
      console.log("res",res.data.emailnotfound === "Email not found")
      if(res.data.emailnotfound === "Email not found"){
      ToastAndroid.show("Please register yourself!", ToastAndroid.SHORT)
      }
      else{
      const { token } = res.data;
        AsyncStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch({ type: types.SET_CURRENT_USER, payload: decoded });
        navigation.navigate("SubscribeScreen")
      }
    })
    .catch(err=>{
      console.log(err)
    })
   
  } else {
    setvalidateOnChange(true);
   
  }
};








const changePwdType = () => {
 
  if (showpassword) {
     
          seticEye('eye')
          setShowPassword(false)
          password: state.password
     
  } else {
      
        seticEye('eye-slash')
          setShowPassword(true)
          
          password: state.password
    
  }

};


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:widthToDP(2) }}>

      <View style={{justifyContent:'center'}}>
           <Image source={logo} alt="Alternate Text"  />
      </View>
      
      
      <FormControl>
      <FormControl.Label  _text={{ color:"black",fontWeight:'bold'}} >
          Email
       </FormControl.Label>
       <Input
          variant="filled"
          onChangeText={(val)=>emailChange(val)}
          keyboardType="email-address"
          value={state.email}
       />
      <Text style={styles.errors}>{errors.email ? errors.email : null}</Text>

       <FormControl.Label _text={{ color:"black",fontWeight:'bold'}} >
          Password
       </FormControl.Label>
      <Input
         
          variant="filled"
          onChangeText={(val)=>passwordChange(val)}
          secureTextEntry={showpassword}
          keyboardType="default"
          value={state.password}
          InputRightElement={
          <Icon
            as={<FontAwesome name={icEye} />}
            size="md"
            m={widthToDP(1)}
            onPress={changePwdType}
            />
        }
         />
      <Text style={styles.errors}>{errors.password?errors.password : null}</Text>

      <View style={{flexDirection:'row',justifyContent:"space-between"}}>
        <View>
          <Checkbox accessibilityLabel="This is a dummy checkbox" value={rememberMe}  onChange={(value) => toggleRememberMe(value)}>
             Remember me
          </Checkbox>
        </View>
      
        <View>
          <Link   _text={{ color:"#0ea5e9"}} onPress={() =>  navigation.navigate('ForgotScreen')}>
            Forgot Password
          </Link>
       </View>
      </View>

         <Button onPress={handleSubmit} marginTop={widthToDP(2)} bg="#0ea5e9">Log In</Button>
         <Button  bg="#27272a" marginTop={widthToDP(2)}  onPress={() => navigation.navigate('RegisterScreen')} >Create a New Account</Button>
    
      
      </FormControl>
      
      
      
    </View>
  )
}



const styles = StyleSheet.create({
 
  errors:{
    color:'red'
  }
});

export default () => {
  return (
    <NativeBaseProvider>
     <LoginScreen />
    </NativeBaseProvider>
  )
}

