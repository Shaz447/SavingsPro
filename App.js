
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import VerificationScreen from './screens/VerificationScreen'
// import SuccessScreen from './screens/SuccessScreen'
// import SubscribeScreen from './screens/SubscribeScreen'
// import DashboardScreen from './screens/DashboardScreen'
// import DetailScreen from './screens/DetailScreen'
//import SplashScreen from  "react-native-splash-screen";

//const Stack = createStackNavigator();
import MyStack from "./navigation/StackNavigator";
import TabStack from './navigation/TabNavigator'
// function MyStack() {
//   return (
    
//     <Stack.Navigator
//     initialRouteName="DetailScreen"
//       screenOptions={{
//           headerStyle: {
//             backgroundColor: '#621FF7',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}>
        
//       <Stack.Screen 
//         name="LoginScreen" 
//         component={LoginScreen} 
//         options={{ title: 'Login' }}
//       />
     
//       <Stack.Screen 
//        name="RegisterScreen" 
//        component={RegisterScreen} 
//        options={{ title: 'Register' }}
//       />
//       <Stack.Screen 
//        name="VerificationScreen" 
//        component={VerificationScreen} 
//        options={{ title: 'Verification' }}
//       />
//       <Stack.Screen 
//        name="SuccessScreen" 
//        component={SuccessScreen} 
//        options={{ title: 'Success' }}
//       />
//        <Stack.Screen 
//        name="SubscribeScreen" 
//        component={SubscribeScreen} 
//        options={{ title: 'Subscribe' }}
//       />
//       <Stack.Screen 
//        name="DashboardScreen" 
//        component={DashboardScreen} 
//        options={{ title: 'Dashboard' }}
//       />
//       <Stack.Screen 
//        name="DetailScreen" 
//        component={DetailScreen} 
//        options={{ title: 'Detail' }}
//       />
//     </Stack.Navigator>
//   );
// }

export default function App() {

  // useEffect(() => {
  //   SplashScreen.hide();
  // });
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

