import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { trafficData } from "../../data/dashboard";

const TrafficChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="traffic"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default TrafficChart;