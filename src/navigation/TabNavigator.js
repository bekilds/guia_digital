import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FilmesScreen from '../screens/FilmesScreen';
import SeriesScreen from '../screens/SeriesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Filmes" component={FilmesScreen} />
            <Tab.Screen name="Séries" component={SeriesScreen} />
        </Tab.Navigator>
    );
}
