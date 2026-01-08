import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { BacklinkTask } from '@/type/backLink';

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
                                No backlink tasks found
                            </TableCell>
                        </TableRow>
                    ) : (
                        tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.task}</TableCell>
                                <TableCell className="text-muted-foreground">
                                    {task.url}
                                </TableCell>
                                <TableCell>{task.dueDate}</TableCell>
                                <TableCell>{task.priority}</TableCell>
                                <TableCell>{task.status}</TableCell>
                                <TableCell>{task.assignee}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default BacklinkTable;
