import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (route && route.params && route.params.autoLogin) {
      // After registration we may receive autoLogin request
      navigation.replace('Home');
    }
  }, [route]);

  const handleLogin = () => {
    // Aquí puedes añadir validación o autenticación real.
    if (!email || !password) return;
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Inicia sesión para descubrir eventos cerca de ti</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>¿No tienes cuenta?</Text>

      <TouchableOpacity style={[styles.button, styles.secondary]} onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.buttonText, styles.secondaryText]}>Crear cuenta nueva</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,  
    backgroundColor: '#f5f5f5',
  },
  title: {  
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {  
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
    button: {
    width: '100%',
    height: 50,
    backgroundColor: '#8B0000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    },
    orText: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#666',
  },
});