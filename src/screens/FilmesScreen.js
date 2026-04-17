import React from 'react';
import { View, FlatList } from 'react-native';
import filmes from '../data/filmes.json';
import CardItem from '../components/CardItem';

export default function FilmesScreen({ navigation }) {
    return (
        <View>
            <FlatList
                data={filmes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardItem
                        item={item}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    />
                )}
            />
        </View>
    );
}
