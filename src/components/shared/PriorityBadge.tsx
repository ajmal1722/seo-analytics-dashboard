import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PriorityBadgeProps {
    priority: "Low" | "Medium" | "High";
}

const styles = {
    High: "bg-red-500/15 text-red-500 border border-red-500/20",
    Medium: "bg-yellow-500/15 text-yellow-600 border border-yellow-500/20",
    Low: "bg-green-500/15 text-green-600 border border-green-500/20",
};

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
    return (
        <Badge
            className={cn(
                "rounded-sm px-2 py-0.5 text-xs font-medium uppercase border-0",
                styles[priority]
            )}
        >
            {priority}
        </Badge>
    );
};

export default PriorityBadge;
