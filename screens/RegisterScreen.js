import React, {useEffect, useState} from 'react';
import {
  Input,
  Checkbox,
  FormControl,
  NativeBaseProvider,
  Button,
  Text,
} from 'native-base';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from './../store/actions/authActions';
import {isEmpty, isEmail} from 'validator';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [state, setState] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phoneno: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phoneno: '',
    agree: false,
  });
  //const [registered,setregistered] = useState(false)
  const [validateOnChange, setvalidateOnChange] = useState(false);
  console.log(auth);
  // const handleChange = (e) => {

  //   const { name, value } = e.target
  //   setState(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))

  //   if (validateOnChange) {
  //     validateForm();
  //   }
  // }

  // const handleCheckboxChange = (e) => {

  //   setState(prevState => ({
  //     ...prevState,
  //     agree: !state.agree
  //   }))

  //   if (validateOnChange) {
  //     validateForm();
  //   }
  // }

  useEffect(() => {
    if (auth.registered) {
      navigation.replace('VerificationScreen');
    }
  }, [auth.registered]);

  const fullnameChange = val => {
    console.log(val);
    setState({
      ...state,
      fullname: val,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const usernameChange = val => {
    console.log(val);
    setState({
      ...state,
      username: val,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const emailChange = val => {
    console.log(val);
    setState({
      ...state,
      email: val,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const passwordChange = val => {
    console.log(val);
    setState({
      ...state,
      password: val,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const confirmpasswordChange = val => {
    console.log(val);
    setState({
      ...state,
      confirmpassword: val,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const phonenoChange = val => {
    console.log(val);
    setState({
      ...state,
      phoneno: val,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const agreeChange = val => {
    console.log(val);
    setState({
      ...state,
      agree: val,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const validateForm = () => {
    let {fullname, username, email, password, confirmpassword, agree, phoneno} =
      state;
    let errors = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      agree: '',
      phoneno: '',
    };
    let valid = true;

    if (isEmpty(email) || !isEmail(email)) {
      errors.email = 'Please provide a verified email address ';
      valid = false;
    }

    if (isEmpty(password) || password.length < 8) {
      errors.password = 'Passowrd should be at least 8 characters long';
      valid = false;
    }

    if (password !== confirmpassword) {
      errors.confirmpassword = 'Passwords mismatch';
      valid = false;
    }

    if (!agree) {
      errors.agree = 'You must be agree to terms of use';
      valid = false;
    }

    if (isEmpty(phoneno) || phoneno.length < 11) {
      errors.phoneno = 'You must enter Phone No';
      valid = false;
    }

    if (isEmpty(fullname)) {
      errors.fullname = 'Enter your full name';
      valid = false;
    }

    if (isEmpty(username)) {
      errors.username = 'Username is required';
      valid = false;
    }

    setErrors(errors);

    return valid;
  };

  const handleSubmit = () => {
    console.log('handle');

    if (validateForm()) {
      let user = {
        username: state.username,
        fullname: state.fullname,
        email: state.email,
        password: state.password,
        confirmpassword: state.confirmpassword,
        phoneno: state.phoneno,
        agree: state.agree,
      };
      console.log(user);

      dispatch(registerUser(user));
    } else {
      setvalidateOnChange(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <FormControl>
          <View style={{margin: 6}}>
            <FormControl.Label _text={{color: 'black', fontWeight: 'bold'}}>
              Full Name
            </FormControl.Label>
            <Input
              variant="filled"
              onChangeText={val => fullnameChange(val)}
              keyboardType="default"
              value={state.fullname}
            />
            <Text style={styles.errors}>
              {errors.fullname ? errors.fullname : null}
            </Text>

            <FormControl.Label _text={{color: 'black', fontWeight: 'bold'}}>
              Username
            </FormControl.Label>
            <Input
              variant="filled"
              onChangeText={val => usernameChange(val)}
              keyboardType="default"
              value={state.username}
            />
            <Text style={styles.errors}>
              {errors.username ? errors.username : null}
            </Text>

            <FormControl.Label _text={{color: 'black', fontWeight: 'bold'}}>
              Email
            </FormControl.Label>
            <Input
              variant="filled"
              onChangeText={val => emailChange(val)}
              keyboardType="email-address"
              value={state.email}
            />
            <Text style={styles.errors}>
              {errors.email ? errors.email : null}
            </Text>

            <FormControl.Label _text={{color: 'black', fontWeight: 'bold'}}>
              Password
            </FormControl.Label>
            <Input
              variant="filled"
              onChangeText={val => passwordChange(val)}
              secureTextEntry={true}
              keyboardType="default"
              value={state.password}
            />
            <Text style={styles.errors}>
              {errors.password ? errors.password : null}
            </Text>

            <FormControl.Label _text={{color: 'black', fontWeight: 'bold'}}>
              Confirm Password
            </FormControl.Label>
            <Input
              variant="filled"
              onChangeText={val => confirmpasswordChange(val)}
              secureTextEntry={true}
              keyboardType="default"
              value={state.confirmpassword}
            />
            <Text style={styles.errors}>
              {errors.confirmpassword ? errors.confirmpassword : null}
            </Text>

            <FormControl.Label _text={{color: 'black', fontWeight: 'bold'}}>
              Phone
            </FormControl.Label>

            <Input
              variant="filled"
              onChangeText={val => phonenoChange(val)}
              keyboardType="phone-pad"
              value={state.phoneno}
            />
            <Text style={styles.errors}>
              {errors.phoneno ? errors.phoneno : null}
            </Text>

            <Checkbox
              onChange={val => agreeChange(val)}
              checked={state.agree}
              aria-label="checkbox">
              I have read and agree to the{' '}
              <Text color="#0ea5e9">Terms Of Agreement </Text>
            </Checkbox>
            <Text style={styles.errors}>
              {errors.agree ? errors.agree : null}
            </Text>

            <Button onPress={handleSubmit} mt={3} _text={{color: 'white'}}>
              Create a New Account
            </Button>
            <Button
              variant="link"
              mt={3}
              color="#0ea5e9"
              onPress={() => navigation.navigate('LoginScreen')}>
              Sign In Instead
            </Button>
          </View>
        </FormControl>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
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
  errors: {
    color: 'red',
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  );
};
