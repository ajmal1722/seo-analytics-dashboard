import type { ContentTask } from "@/type/contentTask";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Props {
    tasks: ContentTask[];
    onTaskClick: (task: ContentTask) => void;
}

const ContentTaskTable: React.FC<Props> = ({ tasks, onTaskClick }) => {
    return (
        <div className="rounded-lg border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Due Date</TableHead>
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
                                No content tasks found
                            </TableCell>
                        </TableRow>
                    ) : (
                        tasks.map((task) => (
                            <TableRow
                                key={task.id}
                                onClick={() => onTaskClick(task)}
                                className="cursor-pointer hover:bg-muted/50"
                            >
                                <TableCell className="font-medium">
                                    {task.title}
                                </TableCell>
                                <TableCell>{task.type}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{task.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">{task.priority}</Badge>
                                </TableCell>
                                <TableCell>{task.dueDate}</TableCell>
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

export default ContentTaskTable;
