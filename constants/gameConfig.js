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
    fr: { /* ... */ },
    en: { /* ... */ },
    ar: { /* ... */ },
    ms: { /* ... */ }
};