import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Exercice1 from './components/Exercice1';
import Exercice2 from './components/Exercice2';
import CameraComponent from './components/CameraComponent';
import Contact from './components/Contact';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Page1'>
        <Stack.Screen name='Page1' component={ Page1 } />
        <Stack.Screen name='Page2' component={ Page2 } />
        <Stack.Screen name='Exercice1' component={ Exercice1 } />
        <Stack.Screen name='Exercice2' component={ Exercice2 } />
        <Stack.Screen name='CameraComponent' component={ CameraComponent } />
        <Stack.Screen name='Contact' component={ Contact } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}