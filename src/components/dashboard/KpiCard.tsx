import type { KpiCard } from "../../type/dashboard";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { kpiData } from "../../data/dashboard";

interface KpiCardProps {
    data: KpiCard;
}

const KpiCard: React.FC<KpiCardProps> = ({ data }) => {
    const isUp = data.trend === "up";
    return (
        <Card className="flex flex-col gap-2">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {data.title}
                </CardTitle>
                <data.Icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="text-2xl font-bold text-foreground">
                    {data.value}
                </div>

                <div className="flex items-center gap-1 text-sm text-primary">
                    {isUp ? (
                        <ArrowUpRight className="h-4 w-4" />
                    ) : (
                        <ArrowDownRight className="h-4 w-4" />
                    )}
                    {data.change} from last month
                </div>
            </CardContent>
        </Card>
    );
};

const KpiCardList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((data) => (
                <KpiCard
                    key={data.title}
                    data={data}
                />
            ))}
        </div>
    );
};

export default KpiCardList;
