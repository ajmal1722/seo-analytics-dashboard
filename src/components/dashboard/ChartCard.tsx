import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface ChartCardProps {
    title: string;
    children: React.ReactNode;
}

const ChartCard = ({ title, children }: ChartCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base font-medium">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
                {children}
            </CardContent>
        </Card>
    );
};

export default ChartCard;