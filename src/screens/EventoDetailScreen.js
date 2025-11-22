import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEventos } from '../context/EventosContext';

const EventoDetailScreen = () => {
  const route = useRoute();
  const { eventoId } = route.params;
  const { getEventoPorId } = useEventos();
  
  const evento = getEventoPorId(eventoId);

  if (!evento) {
    return (
      <View style={styles.centered}>
        <Text>Evento no encontrado</Text>
      </View>
    );
  }

  const handleComprarEntradas = () => {
    alert('Funcionalidad de compra en desarrollo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: evento.imagen }} style={styles.coverImage} />
        
        <View style={styles.content}>
          <Text style={styles.titulo}>{evento.titulo}</Text>
          
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <FontAwesome5 name="calendar" size={16} color="#1C2736" />
              <Text style={styles.infoText}>{evento.fecha} • {evento.hora}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <FontAwesome5 name="map-marker-alt" size={16} color="#1C2736" />
              <Text style={styles.infoText}>{evento.lugar}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <FontAwesome5 name="users" size={16} color="#1C2736" />
              <Text style={styles.infoText}>{evento.asientosDisponibles} asientos disponibles</Text>
            </View>
          </View>

          <View style={styles.precioContainer}>
            <Text style={styles.precio}>${evento.precio}</Text>
            <Text style={styles.precioLabel}>por persona</Text>
          </View>

          <View style={styles.descripcionContainer}>
            <Text style={styles.descripcionTitle}>Descripción</Text>
            <Text style={styles.descripcion}>{evento.descripcion}</Text>
          </View>

          <TouchableOpacity style={styles.comprarButton} onPress={handleComprarEntradas}>
            <Text style={styles.comprarButtonText}>Comprar Entradas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  precioContainer: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  precio: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C2736',
  },
  precioLabel: {
    fontSize: 14,
    color: '#666',
  },
  descripcionContainer: {
    marginBottom: 30,
  },
  descripcionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  comprarButton: {
    backgroundColor: '#1C2736',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  comprarButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventoDetailScreen;