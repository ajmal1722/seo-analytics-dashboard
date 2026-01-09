import type { LucideIcon } from 'lucide-react';

export interface KpiCard {
    title: string;
    Icon: LucideIcon;
    value: string;
    change: string;
    trend: 'up' | 'down';
}

export interface KeywordPerformance {
    id: string;
    keyword: string;
    position: number;
    change: number; // positive for up, negative for down
    traffic: string; // e.g., "1.2k"
    difficulty: number; // 0-100
}