import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Order from './src/components/Order';
import axios from "axios"
import OrderDetail from './src/components/OrderDetail';
import OrderAdmin from './src/components/Admin/OrderAdmin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Admin from './src/components/Admin/Admin';
import Ordenes from './src/components/Admin/Ordenes';
import Splash from './src/components/Splash';

// Crea un Stack Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

axios.defaults.baseURL = "https://burgermake.onrender.com"

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
      <Stack.Screen options={{animationEnabled:"false",headerTitle: null, headerStyle: {
    height: 0, // Oculta el área del encabezado
  }}} name="Splash" component={Splash} />
        <Stack.Screen options={{animationEnabled:"false",headerTitle: null, headerStyle: {
    height: 0, // Oculta el área del encabezado
  }}} name="Login" component={Login} />
        <Stack.Screen options={{
    animationEnabled: false,
    headerTitle: null,
    headerLeft: null, // Esto ocultará la flecha de retroceso
    headerStyle: {
      height: 0, // Oculta el área del encabezado
    },
  }} name="Home" component={Home} />
  <Stack.Screen name="Detalle" component={OrderDetail} />
  <Stack.Screen options={{animationEnabled:"false"}} name="Ordenar" component={Order} />

  {/* ADMIN SCREENS */}
  <Stack.Screen name="Administracion" component={Admin} />
  <Stack.Screen name="Ordenes" component={Ordenes} />
  <Stack.Screen name="Administrar Orden" component={OrderAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}