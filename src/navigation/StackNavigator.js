import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeIcon from 'react-native-vector-icons/Entypo';
import HomeIcon2 from 'react-native-vector-icons/AntDesign';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import PersonIcon2 from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/AntDesign';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import OrderScreen from '../screens/OrderScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import AddressScreen from '../screens/AddressScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                // <HomeIcon name="home" size={24} color="#008E97" />
                <Entypo name="home" size={24} color="black" />
              ) : (
                // <HomeIcon2 name="home" size={24} color="black" />
                <Entypo name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <PersonIcon name="person" size={24} color="#008E97" />
              ) : (
                <PersonIcon2 name="person-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <CartIcon name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <CartIcon name="shoppingcart" size={24} color="black" />
              ),
          }}
        />
        {/* <Tab.Screen
          name="Cart"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) => {
              focused ? (
                <CartIcon name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <CartIcon name="shoppingcart" size={24} color="black" />
              );
            },
          }}
        /> */}
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info"
          component={ProductInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={AddAddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add"
          component={AddressScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
