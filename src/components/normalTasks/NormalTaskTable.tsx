import type { NormalTask } from "@/type/normalTask";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDateString } from '@/lib/dateFormatter';
import PriorityBadge from "../shared/PriorityBadge";

interface Props {
    tasks: NormalTask[];
}

const NormalTaskTable: React.FC<Props> = ({ tasks }) => {
    return (
        <div className="rounded-lg border mt-5">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Task</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assignee</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tasks.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={6}
                                className="h-24 text-center text-muted-foreground"
                            >
                                No tasks found
                            </TableCell>
                        </TableRow>
                    ) : (
                        tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell className="font-medium">{task.task}</TableCell>
                                <TableCell>{task.category}</TableCell>
                                <TableCell>{formatDateString(task.dueDate)}</TableCell>
                                <TableCell>
                                    <PriorityBadge priority={task.priority} />
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">{task.status}</Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {task.assignee}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default NormalTaskTable;
