import { useState, useMemo } from "react";
import TitleCard from "@/components/shared/TitleCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { backlinkTasks as initialTasks } from "@/data/backLink";
import BacklinkFilters from "@/components/backLinkManager/BackLinkFilters";
import BacklinkTable from "@/components/backLinkManager/BackLinkTable";
import BacklinkModal from "@/components/backLinkManager/BackLinkModal";
import type { BacklinkTask } from '@/type/backLink';

const BackLinkManager: React.FC = () => {
    const [tasks, setTasks] = useState<BacklinkTask[]>(initialTasks);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");
    const [priority, setPriority] = useState("All Priority");
    const [open, setOpen] = useState(false);

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesSearch =
                task.task.toLowerCase().includes(search.toLowerCase()) ||
                task.url.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                status === "All Status" || task.status === status;

            const matchesPriority =
                priority === "All Priority" || task.priority === priority;

            return matchesSearch && matchesStatus && matchesPriority;
        });
    }, [tasks, search, status, priority]);

    const addTask = (task: BacklinkTask) => {
        setTasks((prev) => [task, ...prev]);
    };
    return (
        <div>
            <TitleCard
                title="BackLink Manager"
                description="Manage your backlink outreach and maintenance tasks"
                action={
                    <Button onClick={() => setOpen(true)} className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        New Backlink Task
                    </Button>
                }
            />

            <BacklinkFilters
                search={search}
                onSearchChange={setSearch}
                status={status}
                onStatusChange={setStatus}
                priority={priority}
                onPriorityChange={setPriority}
            />

            <BacklinkTable tasks={filteredTasks} />

            <BacklinkModal
                open={open}
                onOpenChange={setOpen}
                onCreate={addTask}
            />
        </div>
    );
};

export default BackLinkManager;