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

const NewBacklinkModal = ({
    open,
    onOpenChange,
    onCreate,
}: {
    open: boolean;
    onOpenChange: (v: boolean) => void;
    onCreate: (task: BacklinkTask) => void;
}) => {
    const [form, setForm] = useState({
        task: "",
        url: "",
        dueDate: "",
        priority: "Medium",
        status: "Todo",
        assignee: "",
    });

    const submit = () => {
        onCreate({
            id: uuid(),
            ...form,
        } as BacklinkTask);

        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Backlink Task</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input
                        placeholder="Task title"
                        onChange={(e) =>
                            setForm({ ...form, task: e.target.value })
                        }
                    />
                    <Input
                        placeholder="URL"
                        onChange={(e) =>
                            setForm({ ...form, url: e.target.value })
                        }
                    />
                    <Input
                        type="date"
                        onChange={(e) =>
                            setForm({ ...form, dueDate: e.target.value })
                        }
                    />
                    <Button onClick={submit}>Create Task</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default NewBacklinkModal;
