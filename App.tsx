import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { BackHandler, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiceApp() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const numberOfChanges = Math.floor(Math.random() * 10) + 5;
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
      }
    }, 30);
  };

  const closeApp = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      alert('No iOS, aplicativos não são fechados programaticamente.');
    }
  };

  return (
    <LinearGradient
      locations={[0, 0.4, 0.4, 1]}
      colors={['#10517A', '#10517A', '#F0F1FA', '#FFF']}
      style={styles.container}
    >
      <View>
        <Text style={styles.dice}>🎲</Text>
      </View>

      <View>
        <Text style={styles.number}>{diceNumber}</Text>
        <TouchableOpacity style={styles.button} onPress={rollDice}>
          <Text style={styles.buttonText}>Jogue o dado</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={closeApp}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  dice: {
    marginTop: '30%',
    fontSize: 100,
  },
  number: {
    fontSize: 100,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#10517A',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  closeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#10517A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 25,
  },
});
