import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ContactComponent = ({ contact }) => {
    return (
        <View style={ styles.container }>
            <View>
                <Entypo name="man" size={28} color={'#000'}></Entypo>
                {
                    contact.name ? <Text>{ contact?.name }</Text> : <Text>undefined</Text>
                }
            </View>
            <View>
                <Entypo name="email" size={28} color={'#000'}></Entypo>
                {
                    contact.emails ? <Text>{ contact?.emails[0].email }</Text> : <Text>undefined</Text>
                }
            </View>
            <View>
                <Entypo name="phone" size={28} color={'#000'}></Entypo>
                {
                    contact.phoneNumbers ? <Text>{ contact?.phoneNumbers[0].number }</Text> : <Text>undefined</Text>
                }
            </View>
        </View>
    );
}
 
export default ContactComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});