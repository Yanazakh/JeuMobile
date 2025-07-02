import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const PLAYER_SIZE = 50;
export const ITEM_SIZE = 40;
export const ITEM_SPEED = 3;
export const RAIN_SPEED = 3.5;
export const SPAWN_INTERVAL = 1200;

export const PIETY_LEVELS = [
  { name: { fr: 'Égaré', en: 'Astray', ar: 'ضال' }, minIndex: 0 },
  { name: { fr: 'Insouciant', en: 'Heedless', ar: 'غافل' }, minIndex: 1 },
  { name: { fr: 'Négligent', en: 'Negligent', ar: 'مهمل' }, minIndex: 2 },
  { name: { fr: 'Pratiquant', en: 'Practicing', ar: 'ممارس' }, minIndex: 3 },
  { name: { fr: 'Sincère', en: 'Sincere', ar: 'مخلص' }, minIndex: 4 },
  { name: { fr: 'Bienfaisant', en: 'Doer of Good', ar: 'محسن' }, minIndex: 5 },
  { name: { fr: 'Pieux', en: 'Pious', ar: 'تقي' }, minIndex: 6 },
];

export const itemTypes = {
  smallSin: {
    name: { fr: 'Petit Péché', en: 'Minor Sin', ar: 'ذنب صغير' },
    emoji: '💧',
    category: 'sin',
    movement: 'diagonal',
    effect: { type: 'ADD_SMALL_SIN' },
  },
  bigSin: {
    name: { fr: 'Grand Péché', en: 'Major Sin', ar: 'كبيرة' },
    emoji: '🔥',
    category: 'sin',
    movement: 'bouncing',
    effect: { type: 'LEVEL_DOWN', amount: 1 },
  },
  shaytan: {
    name: { fr: 'Shaytan', en: 'Shaytan', ar: 'شيطان' },
    emoji: '😈',
    category: 'sin',
    movement: 'seeking',
    effect: { type: 'SHAYTAN_ATTACK', duration: 8000 },
  },
  evilEye: {
    name: { fr: 'Mauvais Œil', en: 'Evil Eye', ar: 'عين' },
    emoji: '🧿',
    category: 'sin',
    movement: 'erratic',
    effect: { type: 'LEVEL_DOWN', amount: 2 },
  },
  protection: {
    name: { fr: 'Invocation', en: 'Protection', ar: 'دعاء' },
    emoji: '🛡️',
    category: 'goodDeed',
    movement: 'rain',
    effect: { type: 'SHIELD', duration: 10000 },
  },
  repentance: {
    name: { fr: 'Repentir', en: 'Repentance', ar: 'توبة' },
    emoji: '✨',
    category: 'goodDeed',
    movement: 'rain',
    effect: { type: 'REPENTANCE' },
  },
};

export const translations = {
  fr: {
    startTitle: 'Bienvenue',
    startDesc: 'Appuyez pour commencer.',
    startButton: 'Démarrer',
    gameOverTitle: 'Fin de la partie',
    finalGoodScore: 'Bon score :',
    moneyScore: 'Argent :',
    badScore: 'Mauvais score :',
    restartButton: 'Recommencer',
  },
  en: {
    startTitle: 'Welcome',
    startDesc: 'Press to start.',
    startButton: 'Start',
    gameOverTitle: 'Game Over',
    finalGoodScore: 'Good score:',
    moneyScore: 'Money:',
    badScore: 'Bad score:',
    restartButton: 'Restart',
  },
  ar: {
    startTitle: 'مرحبا',
    startDesc: 'اضغط للبدء',
    startButton: 'ابدأ',
    gameOverTitle: 'انتهت اللعبة',
    finalGoodScore: 'النقاط الجيدة:',
    moneyScore: 'المال:',
    badScore: 'النقاط السيئة:',
    restartButton: 'إعادة',
  },
  ms: {
    startTitle: 'Selamat datang',
    startDesc: 'Tekan untuk mula.',
    startButton: 'Mula',
    gameOverTitle: 'Tamat permainan',
    finalGoodScore: 'Skor baik:',
    moneyScore: 'Wang:',
    badScore: 'Skor buruk:',
    restartButton: 'Mula semula',
  },
};

