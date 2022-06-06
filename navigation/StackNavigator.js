import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './../screens/SplashScreen';
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';
import VerificationScreen from './../screens/VerificationScreen'
import SuccessScreen from './../screens/SuccessScreen'
import SubscribeScreen from './../screens/SubscribeScreen'
import DashboardScreen from './../screens/DashboardScreen'
import DetailScreen from './../screens/DetailScreen'


import DisplayOfferScreen from  "./../screens/DisplayOfferScreen";
import QRCodeScreen from  "./../screens/QRCodeScreen";
import BottomTabNavigator from './TabNavigator'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const   MainStackNavigator = () =>{
  return (
    
    <Stack.Navigator
    initialRouteName="SplashScreen"
      screenOptions={{
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >

      <Stack.Screen 
        name="SplashScreen" 
        component={SplashScreen} 
        options={{headerShown: false}}
      />
        
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{headerShown: false}}
      />
     
      <Stack.Screen 
       name="RegisterScreen" 
       component={RegisterScreen} 
       options={{headerShown: false}}
      />
      <Stack.Screen 
       name="VerificationScreen" 
       component={VerificationScreen} 
       options={{ title: 'Verification' }}
      />
      <Stack.Screen 
       name="SuccessScreen" 
       component={SuccessScreen} 
       options={{ title: 'Success' }}
      />
       <Stack.Screen 
       name="SubscribeScreen" 
       component={SubscribeScreen} 
       options={{ title: 'Subscribe' }}
      />
      <Stack.Screen 
       name="DashboardScreen" 
       component={DashboardScreen} 
       options={{ title: 'DashboardScreen' }}
      />
      <Stack.Screen 
       name="DetailScreen" 
       component={DetailScreen} 
       options={{ title: 'Detail' }}
      />
    

  
     
     
      <Stack.Screen 
       name="DisplayOfferScreen" 
       component={DisplayOfferScreen} 
       options={{ title: 'DisplayOffer' }}
      />
      <Stack.Screen 
       name="QRCodeScreen" 
       component={QRCodeScreen} 
       //options={{ title: 'DisplayOffer' }}
      />
    </Stack.Navigator>
  );
}


// export const DashboardStackNavigator = ()=>{
//   return (
//     <Tab.Navigator
//     // screenOptions={({ route }) => ({
//     //   tabBarLabel: ({ focused }) => {
//     //     return <Text style={{fontSize: 14, fontWeight: '600',}}>{focused ? 'Home' : ""}</Text>
//     //   },
//     // })}
  
//     tabBarOptions={{
//       //activeTintColor: 'blue',
//      // inactiveTintColor: 'blue',
//       activeBackgroundColor:'blue',
//      // inactiveBackgroundColor:'blue',
//      labelPosition: 'beside-icon',
//      tabStyle: {
//         borderRadius:10,
//         margin:2
//    },

//    labStyle: {
   
//  },

//  style:{
    
//  },
//      showIcon: true, showLabel: true
//    }} 
//    >
//       <Tab.Screen   
//         options={({ navigation }) => ({
//           // tabBarLabel: ({ focused }) => {
//           //   return <Text >{focused ? 'Home' : ""}</Text>
//           // },
//           tabBarIcon: () => (
//             <MaterialIcons name="home" size={30} color="black" />
//           ),
         
//         })}
      
//         name="Home" component={DashboardScreen} />
//       <Tab.Screen 
     
     
//       options={{
//         // tabBarLabel: ({ focused }) => {
//         //   return <Text >{focused ? 'MyAccount' : ""}</Text>
//         // },
//         tabBarIcon: () => (
//           <FontAwesome name="user" size={30} color="black" />
//         ),
//       }}
     
//       name="MyAccount" component={MyAccountScreen} />
//       <Tab.Screen 
      
      
//       options={{
//         // tabBarLabel: ({ focused }) => {
//         //   return <Text >{focused ? 'Notification' : ""}</Text>
//         // },
//         tabBarIcon: () => (
//           <FontAwesome name="bell" size={30} color="black" />
//         ),
//       }}
//       name="Notification" component={NotificationScreen} />
//     </Tab.Navigator>
//   );
// }


// const  MyAccountStackNavigator = () => {
//   return (
//     <Stack.Navigator  screenOptions={{
//       headerStyle: {
//         backgroundColor: '#621FF7',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//       <Stack.Screen name="MyAcountScreen" component={MyAccountScreen} options={{ title: 'MyAccount' }} />
//     </Stack.Navigator>
//   );
// }


// const NotificationStackNavigator = () => {
//   return (
//     <Stack.Navigator  screenOptions={{
//       headerStyle: {
//         backgroundColor: '#621FF7',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//       <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ title: 'Notification' }}/>
//     </Stack.Navigator>
//   );
// }

export  default MainStackNavigator   ;