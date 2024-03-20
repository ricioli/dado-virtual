import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiceApp() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    setDiceNumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <LinearGradient colors={['#00416A', '#E4E5E6']} style={styles.container}>
      <View>
        {/* Simulando a imagem do dado */}
        {/* Você precisaria de uma imagem ou componente 3D aqui */}
        <Text style={styles.dice}>🎲 {diceNumber}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Jogue o dado</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dice: {
    fontSize: 100,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00416A',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
