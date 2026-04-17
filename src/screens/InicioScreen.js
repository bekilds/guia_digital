import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InicioScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo ao Guia de Filmes e Séries!</Text>
            <Text style={styles.sub}>Abra o menu ou use as abas para navegar.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: { color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
    sub: { color: '#A0A0A0', marginTop: 10 },
});
