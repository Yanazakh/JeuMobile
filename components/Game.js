import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const defaultScores = { goodScore: 0, moneyScore: 0, badScore: 0 };

export default function Game({ onGameOver }) {
  useEffect(() => {
    const timer = setTimeout(() => onGameOver(defaultScores), 3000);
    return () => clearTimeout(timer);
  }, [onGameOver]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game placeholder</Text>
      <Pressable style={styles.button} onPress={() => onGameOver(defaultScores)}>
        <Text style={styles.buttonText}>End Game</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#111827' },
  text: { color: 'white', marginBottom: 20 },
  button: { backgroundColor: '#22c55e', padding: 10, borderRadius: 8 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

