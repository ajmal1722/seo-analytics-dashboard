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
import { formatDateString } from '@/lib/dateFormatter';
import PriorityBadge from "../shared/PriorityBadge";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tasks.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={7}
                                className="h-24 text-center text-muted-foreground"
                            >
                                No content tasks found
                            </TableCell>
                        </TableRow>
                    ) : (
                        tasks.map((task) => (
                            <TableRow
                                key={task.id}
                                className="hover:bg-muted/50"
                            >
                                <TableCell className="font-medium">
                                    {task.title}
                                </TableCell>
                                <TableCell>{task.type}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{task.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    <PriorityBadge priority={task.priority} />
                                </TableCell>
                                <TableCell>{formatDateString(task.dueDate)}</TableCell>
                                <TableCell className="text-muted-foreground">
                                    {task.assignee}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="ghost"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onTaskClick(task);
                                        }}
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        <Eye className="h-4 w-4" />
                                        <span>View</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div >
    );
};

export default ContentTaskTable;
