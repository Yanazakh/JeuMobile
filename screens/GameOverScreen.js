import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { translations } from '../constants/gameConfig';

const GameOverScreen = ({ onRestart, scores, lang }) => {
    const t = translations[lang] || translations.fr;
    const finalScores = scores || { goodScore: 0, moneyScore: 0, badScore: 0 };
    return (
        <View style={styles.screenOverlay}>
            <Text style={styles.title}>{t.gameOverTitle}</Text>
            <Text style={styles.scoreText}>{`${t.finalGoodScore} ${finalScores.goodScore}`}</Text>
            <Text style={styles.scoreText}>{`${t.moneyScore} ${finalScores.moneyScore}`}</Text>
            <Text style={styles.scoreText}>{`${t.badScore} ${finalScores.badScore}`}</Text>
            <Pressable style={[styles.button, styles.bgBlue]} onPress={onRestart}>
                <Text style={styles.buttonText}>{t.restartButton}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    screenOverlay: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#111827' },
    title: { fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 24 },
    scoreText: { fontSize: 20, color: 'white', marginBottom: 10 },
    button: { marginTop: 20, paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    bgBlue: { backgroundColor: '#3b82f6' },
});

export default GameOverScreen;
