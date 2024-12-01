import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Rotinas = ({ navigation }) => {
  const handleAddDay = (routine) => {
    alert(`Você adicionou +1 dia para ${routine}`);
  };

  return (
    <ScrollView style={styles.container}>
        
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Relatório', {
            routineTitle: 'Relatórios',
            description: 'Relatório em gráfico dos treinos nos últimos meses.',
            duration: '0',
          })
        }>
        <Text style={styles.cardTitle}>Relatório</Text>
        <Text style={styles.cardDescription}>
          Relatório em gráfico dos treinos nos últimos meses.
        </Text>
        <Text style={styles.cardDuration}>Duração: 0</Text>
      </TouchableOpacity>
    
    
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('DetalhesRotina', {
            routineTitle: 'Segunda-feira',
            description: 'Treino de braço para começar bem a semana.',
            duration: '70 Minutos',
          })
        }>
        <Text style={styles.cardTitle}>Segunda-feira</Text>
        <Text style={styles.cardDescription}>
          Treino de braço para começar bem a semana.
        </Text>
        <Text style={styles.cardDuration}>Duração: 70 Minutos</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddDay('Segunda-feira')}>
          <Text style={styles.addButtonText}>+1 Dia</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('DetalhesRotina', {
            routineTitle: 'Alongamento',
            description: 'Exercícios para alongar antes dos treinos.',
            duration: '5 Minutos',
          })
        }>
        <Text style={styles.cardTitle}>Alongamento</Text>
        <Text style={styles.cardDescription}>
          Exercícios para alongar antes dos treinos.
        </Text>
        <Text style={styles.cardDuration}>Duração: 5 Minutos</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddDay('Alongamento')}>
          <Text style={styles.addButtonText}>+1 Dia</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('DetalhesRotina', {
            routineTitle: 'Yoga',
            description: 'Rotina de yoga.',
            duration: '30 Minutos',
          })
        }>
        <Text style={styles.cardTitle}>Yoga</Text>
        <Text style={styles.cardDescription}>Rotina de yoga.</Text>
        <Text style={styles.cardDuration}>Duração: 30 Minutos</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddDay('Yoga')}>
          <Text style={styles.addButtonText}>+1 Dia</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('DetalhesRotina', {
            routineTitle: 'Segunda-feira dnv?',
            description: 'Treino de braço para começar bem a semana.',
            duration: '70 Minutos',
          })
        }>
        <Text style={styles.cardTitle}>Segunda-feira dnv?</Text>
        <Text style={styles.cardDescription}>
          Treino de braço para começar bem a semana.
        </Text>
        <Text style={styles.cardDuration}>Duração: 70 Minutos</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddDay('Segunda-feira dnv?')}>
          <Text style={styles.addButtonText}>+1 Dia</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createRoutineButton}>
        <Text style={styles.createRoutineButtonText}>Criar rotina</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  cardDuration: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#e0f8e0',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  createRoutineButton: {
    backgroundColor: '#6c63ff',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  createRoutineButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Rotinas;
