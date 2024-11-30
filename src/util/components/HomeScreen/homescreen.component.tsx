import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Button,View } from "react-native";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList,'Home'>;


const HomeScreen: React.FC<HomeScreenProps> = (props) =>{
    return (
      <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Button title='Go to Profile' onPress={()=> props.navigation.push('Profile')}></Button>
        <Button title='Go to Settings' onPress={()=> props.navigation.push('Settings')}></Button>
        <Button title='Go to Camera' onPress={()=>props.navigation.push('Camera')} ></Button>
      </View>
    );
  }
export default HomeScreen;