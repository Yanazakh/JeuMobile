import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { translations } from '../constants/gameConfig';

const StartScreen = ({ onStart, lang }) => {
    const t = translations[lang] || translations.fr;
    return (
        <View style={styles.screenOverlay}>
            <Text style={styles.title}>{t.startTitle}</Text>
            <Text style={styles.description}>{t.startDesc}</Text>
            <Pressable style={[styles.button, styles.bgGreen]} onPress={onStart}>
                <Text style={styles.buttonText}>{t.startButton}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    screenOverlay: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#111827' },
    title: { fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 24 },
    description: { fontSize: 18, color: 'white', textAlign: 'center', marginBottom: 16 },
    button: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, marginBottom: 16, alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    bgGreen: { backgroundColor: '#22c55e' },
});

export default StartScreen;
