import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalhesRotina = ({ route }) => {
  const { routineTitle, description, duration } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{routineTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.duration}>Duração: {duration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  duration: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetalhesRotina;
