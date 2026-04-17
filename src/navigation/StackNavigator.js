import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import DetalhesScreen from '../screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        </Stack.Navigator>
    );
}
