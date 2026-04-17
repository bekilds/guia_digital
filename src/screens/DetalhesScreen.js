import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, StatusBar } from 'react-native';

export default function DetalhesScreen({ route }) {
    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Imagem de Banner Grande */}
            <Image source={{ uri: item.imagem }} style={styles.banner} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.nome}</Text>

                <View style={styles.row}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{item.categoria}</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Sinopse</Text>
                <Text style={styles.desc}>{item.descricao}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    banner: {
        width: '100%',
        height: 450,
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 20,
        marginTop: -30, // Efeito de sobreposição
        backgroundColor: '#121212',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionTitle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
    },
    badge: {
        backgroundColor: '#E50914',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    desc: {
        color: '#A0A0A0',
        fontSize: 16,
        lineHeight: 24,
    },
});
