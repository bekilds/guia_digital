import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function CardItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ margin: 10 }}>
                <Image source={{ uri: item.imagem }} style={{ height: 120 }} />
                <Text>{item.nome}</Text>
                <Text>{item.descricao}</Text>
            </View>
        </TouchableOpacity>
    );
}
