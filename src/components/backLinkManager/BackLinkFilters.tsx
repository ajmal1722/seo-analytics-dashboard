import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

interface Props {
    search: string;
    status: string;
    priority: string;
    onSearchChange: (v: string) => void;
    onStatusChange: (v: string) => void;
    onPriorityChange: (v: string) => void;
}

const BacklinkFilters = ({
    search,
    status,
    priority,
    onSearchChange,
    onStatusChange,
    onPriorityChange,
}: Props) => {
    const statusOptions = ["All Status", "Todo", "In Progress", "Completed"];
    const priorityOptions = ["All Priority", "Low", "Medium", "High"];

    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 lg:flex-row">
                <Input
                    placeholder="Search tasks or URLs..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />

                <Select value={status} onValueChange={onStatusChange}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        {statusOptions.map((s) => (
                            <SelectItem key={s} value={s}>
                                {s}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={priority} onValueChange={onPriorityChange}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                        {priorityOptions.map((p) => (
                            <SelectItem key={p} value={p}>
                                {p}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default BacklinkFilters;