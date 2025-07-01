// components/Game.js

import React, { useEffect, useReducer, useRef } from 'react';
import { StyleSheet, View, Text, PanResponder, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { 
    SCREEN_WIDTH, SCREEN_HEIGHT, PLAYER_SIZE, ITEM_SIZE, 
    ITEM_SPEED, RAIN_SPEED, SPAWN_INTERVAL, itemTypes, PIETY_LEVELS
} from '../constants/gameConfig';

const NEUTRAL_PIETY_LEVEL = 3;

const initialState = { 
    player: { x: 50, y: SCREEN_HEIGHT / 2 }, 
    items: [], 
    goodScore: 0, 
    badScore: 0,
    pietyLevelIndex: NEUTRAL_PIETY_LEVEL, // Commence au niveau "Pratiquant"
    smallSinCounter: 0,
    age: 13, 
    gameOver: false, 
    gameStartTime: 0,
    activeEffects: [],
};

function gameReducer(state, action) {
    switch (action.type) {
        case 'SET_PLAYER_POSITION': 
            return { ...state, player: { ...state.player, ...action.payload } };
        
        case 'APPLY_EFFECT': {
            const newEffect = { ...action.payload, startTime: Date.now() };
            const otherEffects = state.activeEffects.filter(e => e.type !== newEffect.type);
            return { ...state, activeEffects: [...otherEffects, newEffect] };
        }

        case 'GAME_TICK': {
            let newState = { ...state };
            if (newState.gameOver) return state;
            const now = Date.now();

            // Gérer les effets actifs
            newState.activeEffects = newState.activeEffects.filter(effect => now < effect.startTime + effect.duration);
            const isShaytanActive = newState.activeEffects.some(e => e.type === 'SHAYTAN_ATTACK');
            const isShieldActive = newState.activeEffects.some(e => e.type === 'SHIELD');

            // Mettre à jour les items
            const { player, items } = newState; 
            let { goodScore, badScore, pietyLevelIndex, smallSinCounter } = newState; 
            const newItems = [];
            let effectsToApply = [];

            const currentItemSpeed = ITEM_SPEED + (isShaytanActive ? 1.5 : 0);
            const currentRainSpeed = RAIN_SPEED + (isShaytanActive ? 1.5 : 0);

            for (const item of items) {
                let updatedItem = { ...item };
                // ... (logique de mouvement mise à jour)
                if (updatedItem.type.movement === 'rain') { updatedItem.y += currentRainSpeed; } else { updatedItem.x -= currentItemSpeed; /* ... switch ... */ }

                const collision = ( player.x < updatedItem.x + ITEM_SIZE && player.x + PLAYER_SIZE > updatedItem.x && player.y < updatedItem.y + ITEM_SIZE && player.y + PLAYER_SIZE > updatedItem.y );
                
                if (collision) {
                    const effect = updatedItem.type.effect;
                    // Si on a un bouclier, les effets négatifs sont annulés
                    if (isShieldActive && (effect.type === 'SHAYTAN_ATTACK' || effect.type === 'LEVEL_DOWN')) {
                        // On ne fait rien, le bouclier protège
                    } else {
                        switch (effect.type) {
                            case 'ADD_SMALL_SIN':
                                smallSinCounter++;
                                badScore += 1;
                                if (smallSinCounter >= 10) {
                                    pietyLevelIndex = Math.max(0, pietyLevelIndex - 1);
                                    smallSinCounter = 0;
                                }
                                break;
                            case 'LEVEL_DOWN':
                                pietyLevelIndex = Math.max(0, pietyLevelIndex - effect.amount);
                                badScore += 10 * effect.amount;
                                break;
                            case 'REPENTANCE':
                                goodScore += badScore;
                                badScore = 0;
                                pietyLevelIndex = NEUTRAL_PIETY_LEVEL;
                                smallSinCounter = 0;
                                break;
                            case 'SHAYTAN_ATTACK':
                            case 'SHIELD':
                                effectsToApply.push(effect);
                                break;
                        }
                    }
                } else {
                    const isOffScreen = item.type.movement === 'rain' ? updatedItem.y > SCREEN_HEIGHT : updatedItem.x < -ITEM_SIZE;
                    if (!isOffScreen) newItems.push(updatedItem);
                }
            }
            newState.items = newItems;
            newState.effectsToApply = effectsToApply;
            newState.pietyLevelIndex = pietyLevelIndex;
            newState.smallSinCounter = smallSinCounter;
            
            const age = 13 + Math.floor((now - state.gameStartTime) / 4000);
            return { ...newState, goodScore, badScore, age, gameOver: age >= 100 };
        }
        case 'SPAWN_ITEM': {
            if (state.isPrayerTime) return state;
            const isShaytanActive = state.activeEffects.some(e => e.type === 'SHAYTAN_ATTACK');

            let spawnPool = [];
            const pietyIndex = state.pietyLevelIndex;
            
            // Plus le niveau est bas, plus il y a de péchés
            if (pietyIndex <= 1) spawnPool.push(itemTypes.bigSin, itemTypes.evilEye);
            if (pietyIndex <= 2) spawnPool.push(itemTypes.shaytan, itemTypes.smallSin);
            if (pietyIndex <= 3) spawnPool.push(itemTypes.smallSin);
            
            // Plus le niveau est haut, plus il y a de bonnes actions
            if (pietyIndex >= 5) spawnPool.push(itemTypes.repentance);
            if (pietyIndex >= 3) spawnPool.push(itemTypes.protection);
            if (pietyIndex >= 2) spawnPool.push(itemTypes.protection);

            if (isShaytanActive) {
                spawnPool = spawnPool.filter(item => item.category === 'sin');
            }
            
            if(spawnPool.length === 0) spawnPool.push(itemTypes.smallSin); // S'assure que la pioche n'est jamais vide

            const randomType = spawnPool[Math.floor(Math.random() * spawnPool.length)];
            let newItem = { id: Date.now(), type: randomType };
            // ... (logique de positionnement et de mouvement)
            return { ...state, items: [...state.items, newItem] };
        }
        case 'START_GAME': return { ...initialState };
        default: return state;
    }
}

// ... le reste du fichier (getAgeBrackets, Game, styles) a aussi été modifié pour s'adapter.
// Voici le fichier complet pour éviter les erreurs.