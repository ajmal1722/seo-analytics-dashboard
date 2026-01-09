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
    { date: "May", traffic: 2200 },
    { date: "Jun", traffic: 3100 },
];

export const keywordPositionData = [
    { range: "Top 3", count: 18 },
    { range: "4-10", count: 32 },
    { range: "11-20", count: 41 },
    { range: "21-50", count: 65 },
];

export const topKeywordsData = [
    {
        id: "1",
        keyword: "digital marketing",
        position: 3,
        change: 2,
        traffic: "12.5k",
        difficulty: 85
    },
    {
        id: "2",
        keyword: "seo tools",
        position: 5,
        change: -1,
        traffic: "8.2k",
        difficulty: 72
    },
    {
        id: "3",
        keyword: "content strategy",
        position: 8,
        change: 4,
        traffic: "5.1k",
        difficulty: 64
    },
    {
        id: "4",
        keyword: "link building",
        position: 12,
        change: 1,
        traffic: "3.4k",
        difficulty: 78
    },
    {
        id: "5",
        keyword: "keyword research",
        position: 2,
        change: 0,
        traffic: "15.3k",
        difficulty: 60
    },
    {
        id: "6",
        keyword: "technical seo",
        position: 15,
        change: -3,
        traffic: "2.8k",
        difficulty: 88
    }
];