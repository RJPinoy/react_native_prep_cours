import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { useState } from 'react';

let nextId = 0;

export default function Exercice1({ navigation }) {
    const handleNavigation = (key) => {
        switch (key) {
            case 'Go to exercice 2':
                navigation.navigate('Exercice2');
                console.log('clicked on :', key);
                break;
            case 'Go to CameraComponent':
                navigation.navigate('CameraComponent');
                console.log('clicked on :', key);
                break;
            default:
                break;
        }
    }

    const [text, setText] = useState('');
    const [lists, setList] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Exercice 1!</Text>

            <Text>Add text to list:</Text>

            <TextInput value={text} onChange={e => setText(e.target.value)} />

            <Button title="Add" onPress={() => {setList( [...lists, { id: nextId++, text: text }] )}} />

            <FlatList
                data={lists.map(list => ({ key: list.id, text: list.text }))}
                renderItem={({ item }) => (
                    <Text>{item.text}</Text>
                )}
            />

            <StatusBar style="auto" />
            <Button title="Navigate to page2 screen" onPress={() => navigation.navigate('Page2')} />
            <FlatList
                data={[
                    {key: 'Go to exercice 2' },
                    {key: 'Go to CameraComponent' },
                ]}
                renderItem={({item}) => 
                <Text 
                    style={styles.item} 
                    onPress={() => handleNavigation(item.key)}>{item.key}
                </Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});