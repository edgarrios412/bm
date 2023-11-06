import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Order from './src/components/Order';
import axios from "axios"
import OrderDetail from './src/components/OrderDetail';

// Crea un Stack Navigator
const Stack = createStackNavigator();

axios.defaults.baseURL = "https://burgermake.onrender.com"

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{animationEnabled:"false" ,headerTitle: null, headerStyle: {
    height: 0, // Oculta el área del encabezado
    }, }} name="Home" component={Home} />
        <Stack.Screen options={{animationEnabled:"false",headerTitle: null, headerStyle: {
    height: 0, // Oculta el área del encabezado
  }}} name="Login" component={Login} />
  <Stack.Screen options={{animationEnabled:"false",headerTitle: null, headerStyle: {
    height: 0, // Oculta el área del encabezado
  }}} name="Detalle" component={OrderDetail} />
  <Stack.Screen options={{animationEnabled:"false"}} name="Ordenar" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}