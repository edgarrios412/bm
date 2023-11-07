import LottieView from 'lottie-react-native';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from "twrnc"
import splash from "../../assets/animations/splashcool.json"

export default function Splash({navigation}) {

    return(<>
    <View style={{backgroundColor:"#d82435", alignItems:"center", height:"100%"}}>
        <LottieView
        style={tw`w-full m-auto`}
        source={splash}
        imageAssetsFolder='animations'
        autoPlay={true}
        loop={false}
        speed={1.5}
        onAnimationFinish={() => navigation.replace('Login')}
        />
    </View>
    </>)
}0