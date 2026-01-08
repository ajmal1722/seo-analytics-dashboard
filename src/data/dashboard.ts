import type { KpiCard } from "../type/dashboard";
import {
    ChartArea,
    ArrowUpRight,
    Link2,
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
        Icon: Link2,
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

export const trafficData = [
    { date: "Jan", traffic: 1200 },
    { date: "Feb", traffic: 1900 },
    { date: "Mar", traffic: 1700 },
    { date: "Apr", traffic: 2300 },
    { date: "May", traffic: 2600 },
    { date: "Jun", traffic: 3100 },
];

export const keywordPositionData = [
    { range: "Top 3", count: 18 },
    { range: "4-10", count: 32 },
    { range: "11-20", count: 41 },
    { range: "21-50", count: 65 },
];