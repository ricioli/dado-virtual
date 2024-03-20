import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiceApp() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const numberOfChanges = Math.floor(Math.random() * 10) + 5; // Vai mudar entre 5 a 14 vezes
    let currentChange = 0;

    const intervalId = setInterval(() => {
      setDiceNumber((previousNumber) => {
        if (previousNumber === 6) {
          return 1;
        }
        return previousNumber + 1;
      });

      currentChange += 1;
      if (currentChange >= numberOfChanges) {
        clearInterval(intervalId);
        // Aqui você pode chamar uma função final, se desejar
      }
    }, 30); // Muda o número a cada 100ms
  };

  return (
    <LinearGradient colors={['#00416A', '#E4E5E6']} style={styles.container}>
      <View>
        {/* Simulando a imagem do dado */}
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
