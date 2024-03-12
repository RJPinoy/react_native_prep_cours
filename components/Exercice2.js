import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as React from 'react';

export default function Exercice1({ navigation }) {
    const handleNavigation = (key) => {
        switch (key) {
            case 'Go to exercice 1':
                navigation.navigate('Exercice1');
                stopTimer()
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

    const [timer, setTimer] = React.useState(0);
    let timerId;

    function startTimer() {
        React.useEffect(() => {
            let timerId = setInterval(() => {
                setTimer(i => i + 1);
            }, 1000);
        
            return () => clearInterval(timerId);
        }, []);
    };
    
    function stopTimer() {
        setTimer(0);
        clearInterval(timerId);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Exercice 2!</Text>
            <StatusBar style="auto" />

            <Text style={styles.titleText} onLoad={startTimer()}>{timer}</Text>

            <Button title="Navigate to page2 screen" onPress={() => navigation.navigate('Page2')} />
            <FlatList
                data={[
                    {key: 'Go to exercice 1' },
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