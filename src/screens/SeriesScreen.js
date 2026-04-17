import React from 'react';
import { View, FlatList } from 'react-native';
import series from '../data/series.json';
import CardItem from '../components/CardItem';

export default function SeriesScreen({ navigation }) {
    return (
        <View>
            <FlatList
                data={series}
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
