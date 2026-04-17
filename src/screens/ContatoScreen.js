import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contato</Text>
            <Text style={styles.text}>📧 suporte@guiadigital.com</Text>
            <Text style={styles.text}>📞 (11) 9999-9999</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20 },
    title: { color: '#FFF', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    text: { color: '#A0A0A0', fontSize: 18, marginBottom: 10 },
});
