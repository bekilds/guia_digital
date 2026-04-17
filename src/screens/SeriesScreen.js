import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardItem from '../components/CardItem';
import seriesData from '../data/series.json';

export default function SeriesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={seriesData}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <CardItem
                        item={item}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    />
                )}
                contentContainerStyle={{ padding: 15 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
});
