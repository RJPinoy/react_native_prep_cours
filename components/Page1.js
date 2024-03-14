import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function Page1({ navigation }) {
  const handleNavigation = (key) => {
    switch (key) {
      case 'Go to exercice 1':
        navigation.navigate('Exercice1');
        console.log('clicked on :', key);
        break;
      case 'Go to exercice 2':
        navigation.navigate('Exercice2');
        console.log('clicked on :', key);
        break;
      case 'Go to CameraComponent':
          navigation.navigate('CameraComponent');
          console.log('clicked on :', key);
          break;
      case 'Go to Contact':
          navigation.navigate('Contact');
          console.log('clicked on :', key);
          break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Navigate to page2 screen" onPress={() => navigation.navigate('Page2')} />
      <FlatList
        data={[
          {key: 'Go to exercice 1' },
          {key: 'Go to exercice 2' },
          {key: 'Go to CameraComponent' },
          {key: 'Go to Contact' },
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