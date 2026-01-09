import type { KeywordPerformance } from "@/type/dashboard";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Props {
    keywords: KeywordPerformance[];
}

const TopKeywordsTable: React.FC<Props> = ({ keywords }) => {

    // Helper to render change
    const renderChange = (change: number) => {
        if (change > 0) {
            return (
                <div className="flex items-center text-green-600 dark:text-green-500">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    {change}
                </div>
            );
        } else if (change < 0) {
            return (
                <div className="flex items-center text-red-600 dark:text-red-500">
                    <ArrowDown className="mr-1 h-3 w-3" />
                    {Math.abs(change)}
                </div>
            );
        } else {
            return (
                <div className="flex items-center text-muted-foreground">
                    <Minus className="mr-1 h-3 w-3" />
                    0
                </div>
            );
        }
    };

    // Helper for difficulty color
    const getDifficultyColor = (score: number) => {
        if (score < 40) return "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/20";
        if (score < 70) return "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
        return "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/20";
    };

    return (
        <div className="rounded-lg border bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Change</TableHead>
                        <TableHead>Traffic</TableHead>
                        <TableHead>Difficulty</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {keywords.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                                No keywords data available
                            </TableCell>
                        </TableRow>
                    ) : (
                        keywords.map((item) => (
                            <TableRow key={item.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">{item.keyword}</TableCell>
                                <TableCell>{item.position}</TableCell>
                                <TableCell>{renderChange(item.change)}</TableCell>
                                <TableCell>{item.traffic}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className={cn("border-0", getDifficultyColor(item.difficulty))}>
                                        {item.difficulty}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default TopKeywordsTable;
