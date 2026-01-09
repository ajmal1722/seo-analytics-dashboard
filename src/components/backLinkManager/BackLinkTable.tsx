import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { BacklinkTask } from '@/type/backLink';
import { User2, Calendar } from "lucide-react";
import { formatDateString } from '@/lib/dateFormatter';
import PriorityBadge from "../shared/PriorityBadge";

interface Props {
    tasks: BacklinkTask[];
}
const BacklinkTable: React.FC<Props> = ({ tasks }) => {
    return (
        <div className="rounded-lg border mt-5">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Task</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tasks.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={6}
                                className="h-24 text-center text-muted-foreground"
                            >
                                No backlink tasks found
                            </TableCell>
                        </TableRow>
                    ) : (
                        tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.task}</TableCell>
                                <TableCell className="text-primary">
                                    {task.url}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <User2 className="h-4 w-4" />
                                        {task.assignee}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {formatDateString(task.dueDate)}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <PriorityBadge priority={task.priority} />
                                </TableCell>
                                <TableCell>{task.status}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default BacklinkTable;
