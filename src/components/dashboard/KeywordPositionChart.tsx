import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import { keywordPositionData } from "../../data/dashboard";

const KeywordPositionChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={keywordPositionData}>
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar
                    dataKey="count"
                    fill="hsl(var(--primary))"
                    radius={[6, 6, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default KeywordPositionChart;