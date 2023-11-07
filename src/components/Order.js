import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import tw from "twrnc"
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Order({navigation}) {

    const [carne, setCarne] = useState(0)
    const [queso, setQueso] = useState(0)
    const [jamon, setJamon] = useState(0)
    const [tocineta, setTocineta] = useState(0)
    const [lechuga, setLechuga] = useState(0)
    const [tomate, setTomate] = useState(0)
    const [cebolla, setCebolla] = useState(0)
    const [papitas, setPapitas] = useState(0)
    const [salsa, setSalsa] = useState(0)
    
    const [payMethod, setPayMethod] = useState(1)

    const newOrder = async () => {
        const balance = await AsyncStorage.getItem('balance');
        const price = (2000+carne*4000+queso*1000+jamon*1000+lechuga*400+tocineta*1000+tomate*400+cebolla*400+papitas*400+salsa*400)
        if(Number(price) > Number(balance)){
            alert("No tienes suficiente saldo")
            return navigation.navigate("Home")
        }
        const id = await AsyncStorage.getItem('id');
        await axios.post("/user/order", {userId:id, price:price, status:1, ingredients:[carne,queso,jamon,tocineta,lechuga,tomate,cebolla,papitas,salsa]})
        await axios.put("/user", {id:id, balance:balance-price})
        await AsyncStorage.setItem('balance', (balance-price).toString())
        navigation.navigate("Home")
        return alert("Pedido realizado con exito")
    }

    return(<>
    <ScrollView style={tw`p-8 bg-white`}>
        <View style={tw`mb-20`}>
            <Text style={tw`font-semibold text-xl leading-10`}>Selecciona los ingredientes</Text>
            <Text style={tw`text-sm text-gray-400 mb-6`}>Basado en los ingredientes que escojas obtendras tu precio</Text>
            <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Carne</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setCarne(carne-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{carne}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setCarne(carne+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Queso</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setQueso(queso-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{queso}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setQueso(queso+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Jamon</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setJamon(jamon-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{jamon}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setJamon(jamon+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Tocineta</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setTocineta(tocineta-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{tocineta}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setTocineta(tocineta+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Lechuga</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setLechuga(lechuga-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{lechuga}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setLechuga(lechuga+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Tomate</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setTomate(tomate-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{tomate}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setTomate(tomate+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Cebolla</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setCebolla(cebolla-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{cebolla}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setCebolla(cebolla+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Papitas</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setPapitas(papitas-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{papitas}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setPapitas(papitas+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <View style={tw`flex-row justify-between items-center my-3`}>
            <Text style={tw`text-lg`}>Salsas</Text>
            <View style={tw`flex-row gap-7`}>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setSalsa(salsa-1)}><Text style={tw`m-auto`}>-</Text></TouchableOpacity>
                <Text style={tw` text-lg`}>{salsa}</Text>
                <TouchableOpacity style={tw`bg-gray-100 h-9 w-9 rounded-full`} onPress={() => setSalsa(salsa+1)}><Text style={tw`m-auto`}>+</Text></TouchableOpacity>
            </View>
        </View>
        <View style={{borderBottomColor: '#E4E4E4',borderBottomWidth: StyleSheet.hairlineWidth}}/>

        <View style={tw`mt-10`}>
            <Text style={tw`text-center text-xl font-medium text-gray-400`}>TOTAL</Text>
            <Text style={tw`text-center text-4xl mt-2`}>${(2000+carne*4000+queso*1000+jamon*1000+lechuga*400+tocineta*1000+tomate*400+cebolla*400+papitas*400+salsa*400).toLocaleString().replace(".",",")}</Text>
            <TouchableOpacity onPress={() => setPayMethod(1)} style={tw` rounded-md border ${payMethod == 1 ? "border-blue-400" : "border-gray-200"} mt-5  px-4 py-3`}>
                <View style={tw`flex-row items-center gap-4`}>
                <Image
                source={require("../../assets/bk.png")}
                style={tw`w-10 h-10`}
                />
                <Text>Saldo de la cuenta</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPayMethod(2)} style={tw` rounded-md border ${payMethod == 2 ? "border-blue-400" : "border-gray-200"} mt-5  px-4 py-3`}>
                <View style={tw`flex-row items-center gap-4`}>
                <Image
                source={require("../../assets/icons/nequi.png")}
                style={tw`w-10 h-10`}
                />
                <Text>Nequi</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPayMethod(3)} style={tw` rounded-md border ${payMethod == 3 ? "border-blue-400" : "border-gray-200"} mt-5  px-4 py-3`}>
                <View style={tw`flex-row items-center gap-4`}>
                <Image
                source={require("../../assets/icons/daviplata.png")}
                style={tw`w-10 h-10`}
                />
                <Text>Daviplata</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => newOrder()} style={{...tw` py-5 rounded-md mt-14`, backgroundColor:"#d82435"}}>
                <Text style={tw`text-white text-center font-semibold text-xl`}>Pagar ahora</Text>
            </TouchableOpacity>
        </View>

        </View>
    </ScrollView>
    </>)
}