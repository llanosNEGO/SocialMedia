import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEventos } from '../context/EventosContext';

const CategoriasScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoriaId } = route.params;
  const { getEventosPorCategoria, categorias } = useEventos();
  
  const eventos = getEventosPorCategoria(categoriaId);
  const categoria = categorias.find(cat => cat.id === categoriaId);

  const renderEvento = ({ item }) => (
    <TouchableOpacity
      style={styles.eventoItem}
      onPress={() => navigation.navigate('EventoDetail', { eventoId: item.id })}
    >
      <Image source={{ uri: item.imagen }} style={styles.eventoImage} />
      <View style={styles.eventoInfo}>
        <Text style={styles.eventoTitulo}>{item.titulo}</Text>
        <Text style={styles.eventoLugar}>{item.lugar}</Text>
        <Text style={styles.eventoFecha}>{item.fecha} • {item.hora}</Text>
        <Text style={styles.eventoPrecio}>${item.precio}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{categoria?.nombre}</Text>
        <Text style={styles.subtitle}>{eventos.length} eventos encontrados</Text>
      </View>
      
      <FlatList
        data={eventos}
        renderItem={renderEvento}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#8B0000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginTop: 5,
  },
  listContent: {
    padding: 15,
  },
  eventoItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventoImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  eventoInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  eventoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventoLugar: {
    fontSize: 14,
    color: '#666',
  },
  eventoFecha: {
    fontSize: 12,
    color: '#999',
  },
  eventoPrecio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B0000',
  },
});

export default CategoriasScreen;