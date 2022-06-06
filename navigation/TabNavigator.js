import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, MyAccountStackNavigator ,NotificationStackNavigator } from './StackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LoginScreen" component={MainStackNavigator} />
      <Tab.Screen name="MyAccountScreen" component={MyAccountStackNavigator} />
      <Tab.Screen name="NotificationScreen" component={NotificationStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator