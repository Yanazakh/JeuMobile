// constants/gameConfig.js

import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const PLAYER_SIZE = 50;
export const ITEM_SIZE = 40;
export const ITEM_SPEED = 3;
export const RAIN_SPEED = 3.5;
export const SPAWN_INTERVAL = 1200;

// Le système de Piété est conservé, mais sera géré différemment
export const PIETY_LEVELS = [
    { name: { fr: "Égaré", en: "Astray", ar: "ضال" }, minIndex: 0 },         // Index 0 (le plus bas)
    { name: { fr: "Insouciant", en: "Heedless", ar: "غافل" }, minIndex: 1 },    // Index 1
    { name: { fr: "Négligent", en: "Negligent", ar: "مهمل" }, minIndex: 2 },   // Index 2
    { name: { fr: "Pratiquant", en: "Practicing", ar: "ممارس" }, minIndex: 3 },  // Index 3 (Neutre)
    { name: { fr: "Sincère", en: "Sincere", ar: "مخلص" }, minIndex: 4 },       // Index 4
    { name: { fr: "Bienfaisant", en: "Doer of Good", ar: "محسن" }, minIndex: 5 },// Index 5
    { name: { fr: "Pieux", en: "Pious", ar: "تقي" }, minIndex: 6 },          // Index 6 (le plus haut)
];

// NOUVEAU CATALOGUE D'OBJETS SIMPLIFIÉ
export const itemTypes = {
    smallSin: { 
        name: { fr: 'Petit Péché', en: 'Minor Sin', ar: 'ذنب صغير' }, 
        emoji: '💧', 
        category: 'sin',
        movement: 'diagonal',
        effect: { type: 'ADD_SMALL_SIN' } 
    },
    bigSin: { 
        name: { fr: 'Grand Péché', en: 'Major Sin', ar: 'كبيرة' }, 
        emoji: '🔥', 
        category: 'sin',
        movement: 'bouncing',
        effect: { type: 'LEVEL_DOWN', amount: 1 } 
    },
    shaytan: { 
        name: { fr: 'Shaytan', en: 'Shaytan', ar: 'شيطان' }, 
        emoji: '😈', 
        category: 'sin',
        movement: 'seeking',
        effect: { type: 'SHAYTAN_ATTACK', duration: 8000 } // L'effet dure 8 secondes
    },
    evilEye: { 
        name: { fr: 'Mauvais Œil', en: 'Evil Eye', ar: 'عين' }, 
        emoji: '🧿', 
        category: 'sin',
        movement: 'erratic',
        effect: { type: 'LEVEL_DOWN', amount: 2 } 
    },
    protection: { 
        name: { fr: 'Invocation', en: 'Protection', ar: 'دعاء' }, 
        emoji: '🛡️', 
        category: 'goodDeed',
        movement: 'rain',
        effect: { type: 'SHIELD', duration: 10000 } // Bouclier de 10 secondes
    },
    repentance: { 
        name: { fr: 'Repentir', en: 'Repentance', ar: 'توبة' }, 
        emoji: '✨', 
        category: 'goodDeed',
        movement: 'rain',
        effect: { type: 'REPENTANCE' } 
    },
};

export const translations = {
    fr: {
        startTitle: "Bienvenue dans le jeu",
        startDesc: "Appuyez sur le bouton pour commencer",
        startButton: "Commencer",
        gameOverTitle: "Fin de la partie",
        finalGoodScore: "Actions vertueuses :",
        moneyScore: "Argent :",
        badScore: "Mauvaises actions :",
        restartButton: "Rejouer",
    },
    en: {
        startTitle: "Welcome to the game",
        startDesc: "Press the button to start",
        startButton: "Start",
        gameOverTitle: "Game over",
        finalGoodScore: "Good deeds:",
        moneyScore: "Money:",
        badScore: "Bad deeds:",
        restartButton: "Restart",
    },
    ar: {
        startTitle: "\u0645\u0631\u062D\u0628\u0627 \u0628\u0643\u0645",
        startDesc: "\u0627\u0636\u063A\u0637 \u0644\u0644\u0628\u062F\u0621",
        startButton: "\u0628\u062F\u0621",
        gameOverTitle: "\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0644\u0639\u0628\u0629",
        finalGoodScore: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062E\u064A\u0631\u0629:",
        moneyScore: "\u0627\u0644\u0645\u0627\u0644:",
        badScore: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0633\u064A\u0626\u0629:",
        restartButton: "\u0627\u0639\u062F \u0627\u0644\u0644\u0639\u0628",
    },
    ms: {
        startTitle: "Selamat datang",
        startDesc: "Tekan butang untuk bermula",
        startButton: "Mula",
        gameOverTitle: "Tamat permainan",
        finalGoodScore: "Amalan baik:",
        moneyScore: "Wang:",
        badScore: "Amalan buruk:",
        restartButton: "Main semula",
    }
};
