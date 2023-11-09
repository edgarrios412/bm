import { Text, View } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import tw from "twrnc"
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import axios from "axios";


const Order = ({navigation}) => {

    const [order, setOrder] = useState()

    useEffect(() => {
        axios.get("/order")
        .then(({data}) => setOrder(data.sort((a,b) => b.id - a.id)))
    })

    return(
        <ScrollView style={tw`top-0 w-full bg-white p-10`}>
        {order?.map(p =>
        p.status <= 2 && <TouchableOpacity key={p.id} onPress={() => navigation.navigate("Administrar Orden", {id:p.id})} style={tw`flex-row justify-between items-center rounded-md border border-gray-200 mt-3 px-4 py-3`}>
            <View>
            <Text style={tw`font-semibold text-gray-600`}>Compra</Text>
            <Text style={tw`text-xs text-gray-400`}>02/11/23</Text>
            </View>
            <Text style={tw`text-red-600 font-semibold`}>-${Number(p.price).toLocaleString().replace(".",",")}</Text>
          </TouchableOpacity>
        )}
        <Text>Ordenes completadas</Text>
        {order?.map(p =>
        p.status >= 3 && <TouchableOpacity key={p.id} onPress={() => navigation.navigate("Administrar Orden", {id:p.id})} style={tw`flex-row justify-between items-center rounded-md border border-gray-200 mt-3 px-4 py-3`}>
            <View>
            <Text style={tw`font-semibold text-gray-600`}>Compra</Text>
            <Text style={tw`text-xs text-gray-400`}>02/11/23</Text>
            </View>
            <Text style={tw`text-red-600 font-semibold`}>-${Number(p.price).toLocaleString().replace(".",",")}</Text>
          </TouchableOpacity>
        )}
        </ScrollView>
    )
}

export default Order