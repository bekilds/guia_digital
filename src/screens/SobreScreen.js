import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o App</Text>
            <Text style={styles.text}>
                Este aplicativo foi desenvolvido para ajudar você a encontrar os melhores conteúdos
                de entretenimento de forma organizada e elegante.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20 },
    title: { color: '#E50914', fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
    text: { color: '#A0A0A0', fontSize: 16, lineHeight: 24 },
});
