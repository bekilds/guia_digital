import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import SobreScreen from '../screens/SobreScreen';
import ContatoScreen from '../screens/ContatoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Início" component={TabNavigator} />
            <Drawer.Screen name="Sobre" component={SobreScreen} />
            <Drawer.Screen name="Contato" component={ContatoScreen} />
        </Drawer.Navigator>
    );
}
