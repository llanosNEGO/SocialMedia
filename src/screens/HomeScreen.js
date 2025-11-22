import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEventos } from '../context/EventosContext';
import { colors } from '../styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { eventos, categorias } = useEventos();

  const EventoCard = ({ evento }) => (
    <TouchableOpacity
      style={styles.eventoCard}
      onPress={() => navigation.navigate('EventoDetail', { eventoId: evento.id })}
    >
      <Image source={{ uri: evento.imagen }} style={styles.eventoImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
      <View style={styles.eventoInfo}>
        <Text style={styles.eventoTitulo}>{evento.titulo}</Text>
        <Text style={styles.eventoLugar}>{evento.lugar}</Text>
        <Text style={styles.eventoFecha}>{evento.fecha} • {evento.hora}</Text>
        <Text style={styles.eventoPrecio}>${evento.precio}</Text>
      </View>
    </TouchableOpacity>
  );

  const CategoriaCard = ({ categoria }) => (
    <TouchableOpacity
      style={styles.categoriaCard}
      onPress={() => navigation.navigate('Categorias', { categoriaId: categoria.id })}
    >
      <View style={styles.categoriaIcon}>
        <FontAwesome5 name={categoria.icono} size={24} color="#1C2736" />
      </View>
      <Text style={styles.categoriaNombre}>{categoria.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Eventos Sociales</Text>
          <Text style={styles.subtitle}>Descubre los mejores eventos en tu ciudad</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Categorías */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categorías</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriasContainer}>
              {categorias.map((categoria) => (
                <CategoriaCard key={categoria.id} categoria={categoria} />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Eventos Destacados */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos Destacados</Text>
          {eventos.map((evento) => (
            <EventoCard key={evento.id} evento={evento} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525B66',
  },
  header: {
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  categoriasContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  categoriaCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoriaIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoriaNombre: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  eventoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventoImage: {
    width: '100%',
    height: 200,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  eventoInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  eventoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  eventoLugar: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 3,
  },
  eventoFecha: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 5,
  },
  eventoPrecio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  logoutText: {
    marginTop: 10,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;