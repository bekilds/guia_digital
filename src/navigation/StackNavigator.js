import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import DetalhesScreen from '../screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        </Stack.Navigator>
    );
}
