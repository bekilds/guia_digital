import React from 'react';
import { View, Text, Image } from 'react-native';

export default function DetalhesScreen({ route }) {
    const { item } = route.params;

    return (
        <View>
            <Image source={{ uri: item.imagem }} style={{ height: 200 }} />
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.categoria}</Text>
        </View>
    );
}
