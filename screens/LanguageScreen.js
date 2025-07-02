import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const LanguageScreen = ({ onSelectLanguage }) => {
    return (
        <View style={styles.screenOverlay}>
            <Text style={styles.title}>Choisissez votre langue / Choose your language</Text>
            <View>
                <Pressable style={[styles.button, styles.bgBlue]} onPress={() => onSelectLanguage('fr')}>
                    <Text style={styles.buttonText}>Français</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.bgGreen]} onPress={() => onSelectLanguage('en')}>
                    <Text style={styles.buttonText}>English</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.bgRed]} onPress={() => onSelectLanguage('ar')}>
                    <Text style={styles.buttonText}>العربية</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.bgYellow]} onPress={() => onSelectLanguage('ms')}>
                    <Text style={styles.buttonText}>Bahasa Melayu</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenOverlay: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#111827',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bgBlue: { backgroundColor: '#3b82f6' },
    bgGreen: { backgroundColor: '#22c55e' },
    bgRed: { backgroundColor: '#ef4444' },
    bgYellow: { backgroundColor: '#f59e0b' },
});

export default LanguageScreen;
