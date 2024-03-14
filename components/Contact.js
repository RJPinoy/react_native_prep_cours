import * as Contacts from "expo-contacts";
import * as React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import ContactComponent from "./ContactComponent";

const Contact = () => {
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            setContacts([]);
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync({
                    fields: [
                        Contacts.Fields.Name,
                        Contacts.Fields.Emails,
                        Contacts.Fields.PhoneNumbers,
                    ]
                });

                if (data.length > 0) {
                    for (let i = 0; i < 10; i++) {
                        setContacts((prev) => [...prev, data[i]]);
                    };
                };
            };
        })();
    }, []);

    return (
        <ScrollView>
            <Text>
                {contacts.map((contact, index) => {
                    if (contact !== undefined) {
                        return (
                            <ContactComponent key={ index } contact={ contact } />
                        )
                    }
                })}
            </Text>
        </ScrollView>
    );
}
 
export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});