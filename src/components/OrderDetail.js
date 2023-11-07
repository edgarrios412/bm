import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc"
import { FontAwesome } from '@expo/vector-icons'; 
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OrderDetail({navigation, route}) {

    const {id} = route.params
    const [order, setOrder] = useState()

    useEffect(() => {
        axios.get("/order?id="+id)
        .then(({data}) => setOrder(data))
    },[order])

    const cashBack = async () => {
        const userId = await AsyncStorage.getItem('id');
        const balance = await AsyncStorage.getItem('balance')
        await axios.put("/user", {id:userId, balance: Number(balance)+order.price*0.05})
        await AsyncStorage.setItem('balance', (Number(balance)+Number(order.price*0.05)).toString())
        alert("Te hemos retornado el 5% de la compra")
        return navigation.navigate("Home")
    }

    return(
        <ScrollView style={tw`top-0 w-full bg-white p-10 `}>
            <Text style={tw`text-center font-bold text-xl mt-0`}>Orden #{order?.id}</Text>
            <Text style={tw`text-center text-gray-400 text-sm mb-10`}>02/12/23 08:00 pm</Text>
            <Text style={tw`font-bold text-xl`}>Detalle del pedido</Text>
            <Text>Carnes: {order?.ingredients[0]}</Text>
            <Text>Queso: {order?.ingredients[1]}</Text>
            <Text>Jamon: {order?.ingredients[2]}</Text>
            <Text>Tocineta: {order?.ingredients[3]}</Text>
            <Text>Lechuga: {order?.ingredients[4]}</Text>
            <Text>Tomate: {order?.ingredients[5]}</Text>
            <Text>Cebolla: {order?.ingredients[6]}</Text>
            <Text>Papitas: {order?.ingredients[7]}</Text>
            <Text>Salsas: {order?.ingredients[8]}</Text>
            <Text style={tw`text-center font-bold text-xl mt-8`}>Estado del pedido</Text>
            <View style={tw`flex-row items-center gap-4 mt-6`}>
                <FontAwesome name="check-circle" size={24} color={order?.status >= 1 ? "#d82435" : "#DDDDDD"} />
                <Text style={tw`${order?.status >= 1 ? "font-bold":"text-gray-500"} text-base`}>Estamos cocinando tu pedido</Text>
            </View>
            <Text style={{...tw`ml-1.7 text-2xl mb-2`, color:order?.status >= 1 ? "#d82435" : "#DDDDDD"}}>|</Text>
            <View style={tw`flex-row items-center gap-4`}>
                <FontAwesome name="check-circle" size={24} color={order?.status >= 2 ? "#d82435" : "#DDDDDD"} />
                <Text style={tw`text-base ${order?.status >= 2 ? "font-bold":"text-gray-500"}`}>Un repartidor va en camino</Text>
            </View>
            <Text style={{...tw`ml-1.7 text-2xl mb-2`, color:order?.status >= 2 ? "#d82435" : "#DDDDDD"}}>|</Text>
            <View style={tw`flex-row items-center mb-4 gap-4`}>
                <FontAwesome name="check-circle" size={24} color={order?.status >= 3 ? "#d82435" : "#DDDDDD"} />
                <Text style={tw`text-base ${order?.status >= 3 ? "font-bold":"text-gray-500"}`}>Hemos entregado tu pedido</Text>
            </View>
            {order?.status >= 3 && <TouchableOpacity onPress={cashBack} style={{...tw` py-3 rounded-md mt-14`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Calificar servicio</Text>
            </TouchableOpacity>}
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{...tw` py-3 rounded-md mt-2`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Volver</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}