import React from 'react';
import { View, Text, Button } from 'react-native';

export default function InicioScreen({ navigation }) {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Bem-vindo 🎬</Text>

            <Button
                title="Ir para Filmes"
                onPress={() => navigation.navigate('Tabs', { screen: 'Filmes' })}
            />

            <Button
                title="Ir para Séries"
                onPress={() => navigation.navigate('Tabs', { screen: 'Séries' })}
            />
        </View>
    );
}
