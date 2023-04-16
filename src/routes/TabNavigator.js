import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PeriodTracker from '../screens/PeriodTracker';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PeriodTracker"
        component={PeriodTracker}
        options={{headerShown: false, tabBarLabel: 'Home'}}
      />
    </Tab.Navigator>
  );
};
