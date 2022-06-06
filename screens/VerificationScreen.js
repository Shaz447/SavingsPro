import React,{useEffect,useState} from "react"
import {Input,Text,FormControl,NativeBaseProvider,Button} from "native-base"
import { useNavigation } from '@react-navigation/native';
import { View,StyleSheet } from "react-native"
import { isEmpty } from "validator";
import {  verifyOtpAndSaveDb } from "./../store/actions/authActions";
import { useDispatch,useSelector} from 'react-redux'


export const VerificationScreen = () => {
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);
  const [state,setState] =useState({
    token:'',
   })


  const [errors,setErrors] =useState({
    token:'',
  })
  const [validateOnChange,setvalidateOnChange]=useState(false)

  const dispatch = useDispatch()


console.log("auth",auth)
  
useEffect(()=>{
  if(auth.verifiedmessage.message === "token is valid"){
    navigation.push('SuccessScreen')

    setTimeout(() => {
      navigation.push("LoginScreen")
    }, 1000);
  }
   
  
},[auth.verifiedmessage.message])

  const validateForm = () => {
    let { token } = state;
    let  errors = {token:""}  ;
    let valid = true;
  
    if (isEmpty(token) || token.length < 6 ) {
      errors.token = "Please provide a valid token or OTP";
      valid = false;
    }
  
   console.log(errors)
    setErrors(errors);
    
    return valid;
  };



  const tokenChange=(val)=>{
    console.log(val)
    setState({
        ...state,
        token:val
    })
    if (validateOnChange) {
      validateForm();
    }
  };
  const handleSubmit = ()  =>{
    
    if (validateForm()) {
     let user={
       user:auth.user,
       token:state.token
      }
     console.log(user)
     dispatch(verifyOtpAndSaveDb(user))
   }
   else {
     setvalidateOnChange(true);
     
   }

  }



  return (
   
        <View flex={1} justifyContent="center">
         
      <FormControl >
        <View style={{margin:6}} >

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <FormControl.Label>Verification Code</FormControl.Label>
          </View>

          <Input
             variant="filled"
             onChangeText={(val)=>tokenChange(val)}
             keyboardType="default"
             value={state.token}
             placeholder="token"
           />
        <Text style={styles.errors}>{errors.token ? errors.token : null}</Text>
       
        <Button onPress={handleSubmit} bg="#0ea5e9">Confirm</Button>
      </View>
     
      </FormControl>
  
  </View>

  )
}


const styles = StyleSheet.create({
  main:{
   
   alignSelf:"center"
  },
  input: {
    height: 40,
    margin: 12,                       
    borderWidth: 1,
    borderRadius:5
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  errors:{
    color:'red'
  }
});

export default () => {
  return (
    <NativeBaseProvider>
      
        <VerificationScreen />
     
    </NativeBaseProvider>
  )
}

