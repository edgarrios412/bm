import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from "twrnc"

export default function Splash({navigation}) {

    return(<>
    <View style={{backgroundColor:"#d82435", alignItems:"center", height:"100%"}}>
        <LottieView
        style={tw`w-full m-auto`}
        source={require("../../../burgermake-app/assets/animations/burgermake2.json")}
        imageAssetsFolder='animations'
        autoPlay
        loop={false}
        speed={1.5}
        onAnimationFinish={() => navigation.replace('Login')}
        />
    </View>
    </>)
}0