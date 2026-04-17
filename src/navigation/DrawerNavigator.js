import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import TabNavigator from './TabNavigator';
import InicioScreen from '../screens/InicioScreen';
import SobreScreen from '../screens/SobreScreen';
import ContatoScreen from '../screens/ContatoScreen';

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#1E1E1E' }}>
            <View
                style={{
                    backgroundColor: '#E50914',
                    padding: 25,
                    marginTop: -50,
                    alignItems: 'center',
                    marginBottom: 10,
                }}>
                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
                    Guia de Filmes
                </Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerStyle: { backgroundColor: '#1E1E1E' },
                headerTintColor: '#FFF',
                drawerActiveTintColor: '#E50914',
                drawerInactiveTintColor: '#FFF',
            }}>
            <Drawer.Screen name="App" component={TabNavigator} options={{ title: 'Início' }} />
            <Drawer.Screen name="Sobre" component={SobreScreen} />
            <Drawer.Screen name="Contato" component={ContatoScreen} />
        </Drawer.Navigator>
    );
}
