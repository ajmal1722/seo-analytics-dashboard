import { useState } from "react";
import { v4 as uuid } from "uuid";
import type { BacklinkTask } from "@/type/backLink";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

interface Props {
    open: boolean;
    onOpenChange: (v: boolean) => void;
    onCreate: (task: BacklinkTask) => void;
}

const NewBacklinkModal = ({ open, onOpenChange, onCreate }: Props) => {
    const [form, setForm] = useState({
        task: "",
        url: "",
        dueDate: "",
        priority: "Medium",
        status: "Todo",
        assignee: "",
    });

    const handleSubmit = () => {
        onCreate({
            id: uuid(),
            ...form,
        } as BacklinkTask);

        // Reset form after submit (good UX)
        setForm({
            task: "",
            url: "",
            dueDate: "",
            priority: "Medium",
            status: "Todo",
            assignee: "",
        });

        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="mb-5">
                    <DialogTitle>New Backlink Task</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Task Title */}
                    <div className="space-y-1.5">
                        <Label htmlFor="task">Task title</Label>
                        <Input
                            id="task"
                            placeholder="Guest post outreach"
                            value={form.task}
                            onChange={(e) =>
                                setForm({ ...form, task: e.target.value })
                            }
                        />
                    </div>

                    {/* URL */}
                    <div className="space-y-1.5">
                        <Label htmlFor="url">URL</Label>
                        <Input
                            id="url"
                            placeholder="https://example.com"
                            value={form.url}
                            onChange={(e) =>
                                setForm({ ...form, url: e.target.value })
                            }
                        />
                    </div>

                    {/* Assignee + Due Date */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                            <Label htmlFor="assignee">Assignee</Label>
                            <Input
                                id="assignee"
                                placeholder="John Doe"
                                value={form.assignee}
                                onChange={(e) =>
                                    setForm({ ...form, assignee: e.target.value })
                                }
                            />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="dueDate">Due Date</Label>
                            <Input
                                id="dueDate"
                                type="date"
                                value={form.dueDate}
                                onChange={(e) =>
                                    setForm({ ...form, dueDate: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    {/* Priority + Status */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                                value={form.priority}
                                onValueChange={(v) =>
                                    setForm({ ...form, priority: v })
                                }
                            >
                                <SelectTrigger id="priority" className="w-full">
                                    <SelectValue placeholder="Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Low">Low</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="High">High</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={form.status}
                                onValueChange={(v) =>
                                    setForm({ ...form, status: v })
                                }
                            >
                                <SelectTrigger id="status" className="w-full">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Todo">Todo</SelectItem>
                                    <SelectItem value="In Progress">
                                        In Progress
                                    </SelectItem>
                                    <SelectItem value="Completed">
                                        Completed
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Action */}
                    <Button
                        className="w-full"
                        onClick={handleSubmit}
                        disabled={!form.task || !form.url}
                    >
                        Create Task
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default NewBacklinkModal;
