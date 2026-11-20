import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Rarity } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(isoString: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(isoString));
}

export function formatRelativeTime(isoString: string): string {
  const now = Date.now();
  const time = new Date(isoString).getTime();
  const diff = now - time;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export const RARITY_COLORS: Record<Rarity, {
  text: string; bg: string; border: string; glow: string; badge: string; hex: string;
}> = {
  Common: {
    text: 'text-gray-400',
    bg: 'bg-gray-800',
    border: 'border-gray-500',
    glow: '',
    badge: 'bg-gray-700 text-gray-300',
    hex: '#9CA3AF',
  },
  Uncommon: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-900/30',
    border: 'border-emerald-500',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.4)]',
    badge: 'bg-emerald-900/60 text-emerald-300',
    hex: '#10B981',
  },
  'Ultra Rare': {
    text: 'text-purple-400',
    bg: 'bg-purple-900/30',
    border: 'border-purple-500',
    glow: 'shadow-[0_0_25px_rgba(139,92,246,0.5)]',
    badge: 'bg-purple-900/60 text-purple-300',
    hex: '#8B5CF6',
  },
  Chase: {
    text: 'text-amber-400',
    bg: 'bg-amber-900/20',
    border: 'border-amber-400',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.6)]',
    badge: 'bg-amber-900/60 text-amber-300',
    hex: '#F59E0B',
  },
};

export function getRarityColors(rarity: Rarity) {
  return RARITY_COLORS[rarity];
}

export function getRarityStars(rarity: Rarity): string {
  const map: Record<Rarity, string> = {
    Common: '◆',
    Uncommon: '◆◆',
    'Ultra Rare': '◆◆◆',
    Chase: '✦✦✦✦',
  };
  return map[rarity];
}

export function getTypeColor(type: string): string {
  const map: Record<string, string> = {
    Fire: '#dc2626',
    Water: '#2563eb',
    Ice: '#67e8f9',
    Electric: '#ca8a04',
    Grass: '#16a34a',
    Earth: '#92400e',
    Dragon: '#7c3aed',
    Dark: '#1e1b4b',
    Psychic: '#db2777',
    Cosmic: '#6d28d9',
    'Fire/Electric': '#ea580c',
    'Water/Dragon': '#1d4ed8',
    'Dragon/Psychic': '#6d28d9',
    'Dark/Dragon': '#312e81',
    'Dragon/Cosmic': '#4c1d95',
    'Water/Dark': '#1e3a8a',
    'Cosmic/Fire': '#7f1d1d',
    'Fire/Ice': '#0e7490',
  };
  return map[type] ?? '#374151';
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateUID(): string {
  const hex = () => Math.floor(Math.random() * 65536).toString(16).toUpperCase().padStart(4, '0');
  return `INV-${hex()}-${hex()}`;
}
