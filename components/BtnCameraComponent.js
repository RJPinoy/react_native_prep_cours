import { TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const BtnCameraComponent = ({title, onPress, icon, color}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Entypo name={icon} size={28} color={color ? color : 'red'}></Entypo>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}
 
export default BtnCameraComponent;