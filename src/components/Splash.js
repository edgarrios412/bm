import LottieView from 'lottie-react-native';
import { Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import tw from "twrnc"
import splash from "../../assets/animations/splashcool.json"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Splash({navigation}) {

    const { width, height } = Dimensions.get('window');

    const [site, setSite] = useState("Login")

    const authUser = async () => {
        const id = await AsyncStorage.getItem('id')
        if(id == null) return
        return setSite("Home")
    }
    
    useEffect(() => {
        authUser()
    },[])

    return(<>
    <View style={{alignItems: 'center', justifyContent: 'center', width, height, flex:1}}>
        <LottieView
        style={{width: '100%', height: '100%',transform: [{ scale: 1.1 }]}}
        source={splash}
        imageAssetsFolder='animations'
        autoPlay={true}
        loop={false}
        speed={1}
        onAnimationFinish={() => navigation.replace(site)}
        />
    </View>
    </>)
}0