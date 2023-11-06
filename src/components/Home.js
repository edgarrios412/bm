import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import tw from "twrnc"
import Ionicons from '@expo/vector-icons/Ionicons'
// import LottieView from 'lottie-react-native';
// import { useFonts } from 'expo-font';
import axios from "axios"

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({isFocused, navigation}) {

  // const [fontsLoaded] = useFonts({
  //   LexendBold: require("../../assets/fonts/Lexend-Bold.ttf"),
  //   LexendSemiBold: require("../../assets/fonts/Lexend-SemiBold.ttf"),
  //   LexendMedium: require("../../assets/fonts/Lexend-Medium.ttf"),
  //   LexendLight: require("../../assets/fonts/Lexend-Light.ttf")
  // })

  // if(!fontsLoaded) return null

  const [user, setUser] = useState()
  
  const getUser = async () => {
    const id = await AsyncStorage.getItem('id');
    const {data} = await axios.get("/user/"+id)
    setUser(data)
  }

  useEffect(() => {
    getUser()
  },[])
  
  useFocusEffect(
    React.useCallback(() => {
      getUser();
    }, [])
  );

  const editOrder = async (id) => {
  
  await axios.put("/order", {id:id, status:2})
  getUser();
  }

  const addBalance = async ()=> {
    const id = await AsyncStorage.getItem('id');
    await axios.put("/user", {id:id, balance: Number(user?.balance)+5000})
    alert("Has recargado 5.000 pesos a tu balance")
    setUser({...user, balance: Number(user.balance)+5000})
    await AsyncStorage.setItem('balance', (Number(user?.balance)+5000).toString());
  }
  const handlePress = () => {
    alert("Boton Home")
  }

  return (
    <ScrollView style={tw`top-0 w-full bg-white p-10`}>
      <View style={tw`w-full flex-row justify-between items-center`}>
        <View>
            <Text style={{...tw`mt-8 text-lg text-gray-400 leading-7 `,  }}>Balance</Text>
            <Text style={{...tw` text-3xl text-gray-700`,  }}>${Number(user?.balance).toLocaleString().replace(".",",")}</Text>
        </View>
        <View style={tw`flex-row items-center gap-5`}>
            <TouchableOpacity onPress={() => alert("Mostrar notificaciones")}>
        <Ionicons style={tw` top-6`} name="notifications-outline" size={26} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Mostrar perfil")}>
            <Image
            source={{
                uri: 'https://food-images.files.bbci.co.uk/food/recipes/black_and_blue_burger_95881_16x9.jpg',
              }}
              style={tw`top-6 rounded-full w-11 h-11`}
            />
            </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-row mt-8 justify-between`}>
        <View style={tw`flex items-center`}>
        <TouchableOpacity onPress={addBalance} style={tw` rounded-full border-2 border-gray-300 w-12 h-12`}>
        <AntDesign style={tw`m-auto`} name="plus" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={{...tw`font-medium w-16 text-center text-gray-500`,  }}>Recargar</Text>
        </View>
        <View style={tw`flex-col items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate('Ordenar')} style={tw` rounded-full border-2 border-gray-300 w-12 h-12`}>
        <FontAwesome5 style={tw`m-auto`} name="shopping-basket" size={20} color="gray" />
        </TouchableOpacity>
        <Text style={{...tw`font-medium w-16 text-center text-gray-500`,  }}>Pedir</Text>
        </View>
        <View style={tw`flex-col items-center`}>
        <TouchableOpacity onPress={() => alert("Invitar amigos")} style={tw` rounded-full border-2 border-gray-300 w-12 h-12`}>
        <FontAwesome5 style={tw`m-auto`} name="user-friends" size={18} color="gray" />
        </TouchableOpacity>
        <Text style={{...tw`font-medium w-16 text-center text-gray-500`,  }}>Invitar</Text>
        </View>
        <View style={tw`flex-col items-center`}>
        <TouchableOpacity onPress={() => alert("Solicitar soporte")} style={tw` rounded-full border-2 border-gray-300 w-12 h-12`}>
        <MaterialIcons style={tw`m-auto`} name="support-agent" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={{...tw`font-medium w-16 text-center text-gray-500`,  }}>Soporte</Text>
        </View>
      </View>
      <View style={tw`mt-10`}>
        <Text style={tw`font-semibold text-xl`}>Pedidos pendientes</Text>
        {user?.orders.map(p =>
        <TouchableOpacity onPress={() => navigation.navigate("Detalle")} key={p.id} style={tw`flex-row justify-between items-center rounded-md border border-gray-200 mt-3 px-4 py-3`}>
          <View>
          {p.status == 1 && <Text style={tw`font-semibold text-gray-600`}>Compra (Cocinando)</Text>}
          {p.status == 2 && <Text style={tw`font-semibold text-gray-600`}>Compra (Enviado)</Text>}
          {p.status == 3 && <Text style={tw`font-semibold text-gray-600`}>Compra (Entregado)</Text>}
          <Text style={tw`text-xs text-gray-400`}>02/11/23</Text>
          </View>
          <Text style={tw`text-red-600 font-semibold`}>-${Number(p.price).toLocaleString().replace(".",",")}</Text>
        </TouchableOpacity>
        )}
      </View>
      <View style={tw`mt-10`}>
        <Text style={tw`font-semibold text-xl`}>Historial</Text>
        <View style={tw`flex-row justify-between items-center rounded-md border border-gray-200 mt-3 px-4 py-3`}>
          <View>
          <Text style={tw`font-semibold text-gray-600`}>Recarga Nequi</Text>
          <Text style={tw`text-xs text-gray-400`}>02/11/23</Text>
          </View>
          <Text style={tw`text-green-600 font-semibold`}>+$50,000</Text>
        </View>
        <View style={tw`flex-row justify-between items-center rounded-md border border-gray-200 mt-3 px-4 py-3`}>
          <View>
          <Text style={tw`font-semibold text-gray-600`}>Compra</Text>
          <Text style={tw`text-xs text-gray-400`}>01/11/23</Text>
          </View>
          <Text style={tw`text-red-600 font-semibold`}>-$13,000</Text>
        </View>
        <View style={tw`flex-row justify-between items-center rounded-md border border-gray-200 mt-3 px-4 py-3`}>
          <View>
          <Text style={tw`font-semibold text-gray-600`}>Recarga Nequi</Text>
          <Text style={tw`text-xs text-gray-400`}>02/11/23</Text>
          </View>
          <Text style={tw`text-green-600 font-semibold`}>+$50,000</Text>
        </View>
        <View style={tw`flex-row justify-between items-center rounded-md border border-gray-200 mb-20 mt-3 px-4 py-3`}>
          <View>
          <Text style={tw`font-semibold text-gray-600`}>Compra</Text>
          <Text style={tw`text-xs text-gray-400`}>01/11/23</Text>
          </View>
          <Text style={tw`text-red-600 font-semibold`}>-$13,000</Text>
        </View>
      </View>
    </ScrollView>
  )
}