import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventosProvider } from './src/context/EventosContext';
import HomeScreen from './src/screens/HomeScreen';
import EventoDetailScreen from './src/screens/EventoDetailScreen';
import CategoriasScreen from './src/screens/CategoriasScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <EventosProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#8B0000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'Eventos Sociales' }}
          />
          <Stack.Screen 
            name="EventoDetail" 
            component={EventoDetailScreen}
            options={{ title: 'Detalle del Evento' }}
          />
          <Stack.Screen 
            name="Categorias" 
            component={CategoriasScreen}
            options={{ title: 'Categorías' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </EventosProvider>
  );
}