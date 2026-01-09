import { useState, useMemo } from "react";
import TitleCard from "@/components/shared/TitleCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { normalTasks as initialTasks } from "@/data/normalTasks";
import NormalTaskFilters from "@/components/normalTasks/NormalTaskFilters";
import NormalTaskTable from "@/components/normalTasks/NormalTaskTable";
import NormalTaskModal from "@/components/normalTasks/NormalTaskModal";
import type { NormalTask } from '@/type/normalTask';


const NormalTasks: React.FC = () => {
    const [tasks, setTasks] = useState<NormalTask[]>(initialTasks);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");
    const [priority, setPriority] = useState("All Priority");
    const [open, setOpen] = useState(false);

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesSearch =
                task.task.toLowerCase().includes(search.toLowerCase()) ||
                task.category.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                status === "All Status" || task.status === status;

            const matchesPriority =
                priority === "All Priority" || task.priority === priority;

            return matchesSearch && matchesStatus && matchesPriority;
        });
    }, [tasks, search, status, priority]);

    const addTask = (task: NormalTask) => {
        setTasks((prev) => [task, ...prev]);
    };

    return (
        <div>
            <TitleCard
                title="Normal Tasks"
                description="Manage your general daily tasks and to-dos."
                action={
                    <Button onClick={() => setOpen(true)} className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        New Task
                    </Button>
                }
            />

            <NormalTaskFilters
                search={search}
                onSearchChange={setSearch}
                status={status}
                onStatusChange={setStatus}
                priority={priority}
                onPriorityChange={setPriority}
            />

            <NormalTaskTable tasks={filteredTasks} />

            <NormalTaskModal
                open={open}
                onOpenChange={setOpen}
                onCreate={addTask}
            />
        </div>
    );
};

export default NormalTasks;