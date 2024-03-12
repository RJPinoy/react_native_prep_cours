import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Page2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>New page!</Text>
      <StatusBar style="auto" />
      <Button title="Navigate to page1 screen" onPress={() => navigation.navigate('Page1')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});