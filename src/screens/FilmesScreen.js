import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardItem from '../components/CardItem';
import filmes from '../data/filmes.json';

export default function FilmesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={filmes}
                renderItem={({ item }) => (
                    <CardItem
                        item={item}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    />
                )}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={{ padding: 15 }}
            />
        </View>
    );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#121212' } });
