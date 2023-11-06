import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc"

export default function OrderDetail({navigation}) {
    return(
        <ScrollView style={tw`top-0 w-full bg-white p-10`}>
            <Text style={tw``}>Orden #3273</Text>
            <Text>02/12/23 08:00 pm</Text>
            <Text>Detalle del pedido</Text>
            <Text>Carnes: 0</Text>
            <Text>Carnes: 0</Text>
            <Text>Carnes: 0</Text>
            <Text>Carnes: 0</Text>
            <Text>Estado del pedido</Text>
            <Text>Cocinando</Text>
            <Text>Enviado</Text>
            <Text>Entregado</Text>
            <TouchableOpacity>
                <Text>¿Deseas calificar el servicio?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Volver</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}