import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from "twrnc"
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {

  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()

  const handlePress = async () => {
    const {data} = await axios.post("/user/verify", {phone:phone, password:password})
    if(data.status){
      await AsyncStorage.setItem('id', data?.user?.id.toString());
      await AsyncStorage.setItem('balance', data?.user?.balance.toString());
      navigation.navigate("Home")
    }else{
      alert("Datos invalidos")
    }
  }

  return (
    <View>
      <Image
          source={{
            uri: 'https://food-images.files.bbci.co.uk/food/recipes/black_and_blue_burger_95881_16x9.jpg',
          }}
          style={tw`absolute top-0 left-0 w-full h-2/7`}
        />
      <View style={tw`top-1/4 left-0 w-full h-full bg-white rounded-t-3xl`}>
      <Text style={tw`mt-8 left-6 text-3xl font-semibold leading-10`}>Hola!</Text>
      <Text style={tw`left-6 text-lg text-gray-500`}>Bienvenido de vuelta</Text>
      <View style={tw`m-auto mt-12 w-6/7 h-2/4`}>
      <View>
      <Text style={tw`font-semibold mb-1 text-gray-700`}>Telefono</Text>
      <TextInput onChangeText={(value) => setPhone(value)} placeholder="Ingresa tu numero telefonico" style={tw` bg-slate-100 rounded px-10 py-2`}></TextInput>
      <Feather style={tw`w-4 h-4 absolute mt-9.5 ml-3`} name="phone" size={16} color="gray" />
      </View>
      <View style={tw`mt-7`}>
      <Text style={tw`font-semibold mb-1 text-gray-700`}>Contraseña</Text>
      <TextInput secureTextEntry onChangeText={(value) => setPassword(value)} placeholder="Ingresa tu contraseña" style={tw` bg-slate-100 rounded px-10 py-2`}></TextInput>
      <Feather style={tw`w-4 h-4 absolute mt-9.5 ml-3`} name="lock" size={16} color="gray" />
      </View>
      <TouchableOpacity><Text style={tw`text-orange-500 mt-3`}>Olvide mi contraseña</Text></TouchableOpacity>
      <TouchableOpacity value="number" onPress={handlePress} style={tw`flex m-auto mt-10 rounded-xl bg-orange-400 px-10 py-2`}>
      <Text style={tw`text-lg text-white font-medium`}>Ingresar</Text>
    </TouchableOpacity>
    <View style={tw`absolute bottom-0 flex w-full`}>
    <Text style={tw`text-center m-auto`}>¿Aun no tienes cuenta?</Text>
    <TouchableOpacity style={tw`text-center m-auto mt-2`}><Text style={tw`flex text-orange-500 font-medium`}> Registrate</Text></TouchableOpacity>
    </View>
      </View>
      <StatusBar style="auto" />
      </View>
    </View>
  )
}