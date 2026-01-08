import type { LucideIcon } from "lucide-react";

export interface KpiCard {
    title: string;
    Icon: LucideIcon;
    value: string;
    change: string;
    trend: 'up' | 'down';
}