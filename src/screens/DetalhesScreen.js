import React from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Badge, Appbar, useTheme } from 'react-native-paper';

const { width } = Dimensions.get('window');

const DetailsScreen = ({ route, navigation }) => {
  const { colors } = useTheme();

  const { item } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {}
      <Appbar.Header style={{ backgroundColor: colors.surface }} mode="center-aligned">
        <Appbar.BackAction color={colors.text} onPress={() => navigation.goBack()} />
        <Appbar.Content title="Detalhes" titleStyle={{ color: colors.text, fontWeight: 'bold' }} />
        <Appbar.Action icon="heart-outline" color={colors.text} onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <Image source={{ uri: item.imagem_banner }} style={styles.banner} />

        {}
        <View style={styles.infoSection}>
          <Text variant="headlineMedium" style={[styles.title, { color: colors.text }]}>
            {item.nome}
          </Text>
          <Badge style={[styles.badge, { backgroundColor: colors.primary }]}>
            {item.categoria}
          </Badge>
        </View>

        {/* Descrição Completa */}
        <View style={styles.descriptionSection}>
          <Text variant="titleMedium" style={[styles.sinopseTitle, { color: colors.text }]}>
            Sinopse
          </Text>
          <Text variant="bodyLarge" style={[styles.descriptionText, { color: colors.secondaryText }]}>
            {item.descricao_completa}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  banner: {
    width: width,
    height: 300,
    resizeMode: 'cover',
  },
  infoSection: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginTop: 5,
  },
  descriptionSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sinopseTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    lineHeight: 24, 
  },
});

export default DetailsScreen;