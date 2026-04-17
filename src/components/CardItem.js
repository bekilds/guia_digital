import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardItem({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
            <Image source={{ uri: item.imagem }} style={styles.img} />
            <View style={styles.content}>
                <Text style={styles.nome}>{item.nome}</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.categoria}</Text>
                </View>
                <Text numberOfLines={2} style={styles.desc}>
                    {item.descricao}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#1E1E1E',
        marginBottom: 15,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 4,
    },
    img: { width: 100, height: 140 },
    content: { padding: 12, flex: 1, justifyContent: 'space-between' },
    nome: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    badge: {
        backgroundColor: '#E50914',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
    desc: { color: '#A0A0A0', fontSize: 13 },
});
