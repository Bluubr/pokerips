export type Rarity = 'Common' | 'Uncommon' | 'Ultra Rare' | 'Chase';
export type InventoryStatus = 'Available' | 'Reserved' | 'Owned' | 'Shipped' | 'Quarantined';
export type CardCondition = 'Mint' | 'Near Mint' | 'Excellent' | 'Good' | 'Poor';
export type RipMode = 'quick' | 'cinematic';

export interface CardAbility {
  name: string;
  damage?: number;
  description: string;
}

export interface Card {
  id: string;
  name: string;
  set: string;
  cardNumber: string;
  rarity: Rarity;
  imageType: string;
  marketValue: number;
  description: string;
  hp: number;
  type: string;
  illustrator: string;
  abilities: CardAbility[];
  weaknesses: string[];
  resistances: string[];
}

export interface CardWeight {
  cardId: string;
  weight: number;
}

export interface RarityDistribution {
  Common: number;
  Uncommon: number;
  'Ultra Rare': number;
  Chase: number;
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  flavourText: string;
  price: number;
  artTheme: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  availableCount: number;
  totalCount: number;
  isActive: boolean;
  rarityDistribution: RarityDistribution;
  cardsPerPack: number;
  cards: { [K in Rarity]: CardWeight[] };
  tags: string[];
  featured?: boolean;
  hotDeal?: boolean;
}

export interface InventoryItem {
  inventoryId: string;
  cardId: string;
  card: Card;
  userId: string;
  status: InventoryStatus;
  condition: CardCondition;
  grading?: { service: string; grade: number; certNumber: string };
  acquisitionDate: string;
  packOpeningId: string;
  packId: string;
  packName: string;
  illustrativeValue: number;
}

export interface PackOpening {
  openingId: string;
  packId: string;
  packName: string;
  packCost: number;
  cards: InventoryItem[];
  openedAt: string;
  mode: RipMode;
}

export interface WalletTransaction {
  id: string;
  type: 'credit' | 'debit' | 'bonus';
  amount: number;
  description: string;
  timestamp: string;
  balance: number;
}

export interface RecentPull {
  id: string;
  username: string;
  avatarColor: string;
  card: { name: string; rarity: Rarity; set: string };
  packName: string;
  timeAgo: string;
}
