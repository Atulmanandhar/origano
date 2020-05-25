import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import DetailScreen from './src/screens/DetailScreen';
import SearchScreen from './src/screens/SearchScreen';
import PizzaScreen from './src/screens/PizzaScreen';
import MyOrdersScreen from './src/screens/MyOrdersScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import SpecialScreen from './src/screens/SpecialScreen';
import BurgerScreen from './src/screens/BurgerScreen';
import PastaScreen from './src/screens/PastaScreen';
import SaladScreen from './src/screens/SaladScreen';
import DessertScreen from './src/screens/DessertScreen';
import BeverageScreen from './src/screens/BeverageScreen';
import SignupScreen from './src/screens/Profile/SignupScreen';

const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="orange"
      // inactiveColor="#424242"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={MyOrdersScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-pizza" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Signup" component={SignupScreen} />
    </ProfileStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        headerMode="float">
        <Stack.Screen name="Home" component={HomeTabNavigator} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Special" component={SpecialScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Burger" component={BurgerScreen} />
        <Stack.Screen name="Pasta" component={PastaScreen} />
        <Stack.Screen name="Salad" component={SaladScreen} />
        <Stack.Screen name="Dessert" component={DessertScreen} />
        <Stack.Screen name="Beverage" component={BeverageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
