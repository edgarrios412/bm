import { Text, TouchableOpacity, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import tw from "twrnc"

const Admin = ({navigation}) => {
    return(
        <ScrollView style={tw`top-0 w-full bg-white p-10`}>
            <TouchableOpacity onPress={() => navigation.navigate("Ordenes")} style={{...tw` py-3 rounded-md mt-14`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Ordenes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Mostrar usuarios")} style={{...tw` py-3 rounded-md mt-4`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Usuarios</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Mostrar cupones")} style={{...tw` py-3 rounded-md mt-4`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Cupones</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Mostrar promociones")} style={{...tw` py-3 rounded-md mt-4`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Promociones</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Mostrar estadisticas")} style={{...tw` py-3 rounded-md mt-4`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Estadisticas</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Admin