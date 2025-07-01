import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import LanguageScreen from './screens/LanguageScreen';
import StartScreen from './screens/StartScreen';
import GameOverScreen from './screens/GameOverScreen';
import Game from './components/Game';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('language');
    const [lang, setLang] = useState('fr');
    const [finalScores, setFinalScores] = useState({});

    const handleSelectLanguage = useCallback((selectedLang) => {
        setLang(selectedLang);
        setCurrentScreen('start');
    }, []);

    const handleStartGame = useCallback(() => {
        setCurrentScreen('game');
    }, []);

    const handleGameOver = useCallback((scores) => {
        setFinalScores(scores);
        setCurrentScreen('gameOver');
    }, []);

    const handleRestart = useCallback(() => {
        setCurrentScreen('language');
    }, []);

    const renderScreen = () => {
        switch (currentScreen) {
            case 'language':
                return <LanguageScreen onSelectLanguage={handleSelectLanguage} />;
            case 'start':
                return <StartScreen onStart={handleStartGame} lang={lang} />;
            case 'game':
                return <Game onGameOver={handleGameOver} lang={lang} />;
            case 'gameOver':
                return <GameOverScreen onRestart={handleRestart} scores={finalScores} lang={lang} />;
            default:
                return <LanguageScreen onSelectLanguage={handleSelectLanguage} />;
        }
    };

    return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});