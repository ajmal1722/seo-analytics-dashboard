import type { KpiCard } from "../type/index";
import {
    ChartArea,
    ArrowUpRight,
    Link2Icon,
    User2,
} from 'lucide-react';

export const kpiData: KpiCard[] = [
    {
        title: "Organic Traffic",
        Icon: ChartArea,
        value: "24,582",
        change: "+12.5%",
        trend: 'up'
    },
    {
        title: "Keywords Ranking",
        Icon: ArrowUpRight,
        value: "1,247",
        change: "+8.2%",
        trend: 'up'
    },
    {
        title: "Total Backlinks",
        Icon: Link2Icon,
        value: "8,453",
        change: "156 this week",
        trend: 'up'
    },
    {
        title: "Domain Authority",
        Icon: User2,
        value: "68/100",
        change: "-2 points",
        trend: 'down'
    },
];
