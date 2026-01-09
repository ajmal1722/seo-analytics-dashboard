import { useState, useMemo } from "react";
import TitleCard from "@/components/shared/TitleCard";
import ContentTaskTable from "@/components/contentTasks/ContentTaskTable";
import ContentFilters from "@/components/contentTasks/ContentFilters";
import ContentViewer from "@/components/contentTasks/ContentViewer";
import { contentTasks } from "@/data/contentTasks";
import type { ContentTask } from "@/type/contentTask";

const ContentTasks: React.FC = () => {
    const [tasks, setTasks] = useState<ContentTask[]>(contentTasks);
    const [selectedTask, setSelectedTask] = useState<ContentTask | null>(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    // Filter states
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");
    const [priority, setPriority] = useState("All Priority");

    // Memoized filtered tasks
    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesSearch =
                task.title.toLowerCase().includes(search.toLowerCase()) ||
                task.slug.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                status === "All Status" || task.status === status;

            const matchesPriority =
                priority === "All Priority" || task.priority === priority;

            return matchesSearch && matchesStatus && matchesPriority;
        });
    }, [tasks, search, status, priority]);

    const handleTaskClick = (task: ContentTask) => {
        setSelectedTask(task);
        setIsViewerOpen(true);
    };

    return (
        <div>
            <TitleCard
                title="Content Tasks"
                description="Manage your content calendar, drafts, and publication schedule."
            />

            <ContentFilters
                search={search}
                onSearchChange={setSearch}
                status={status}
                onStatusChange={setStatus}
                priority={priority}
                onPriorityChange={setPriority}
            />

            <ContentTaskTable
                tasks={filteredTasks}
                onTaskClick={handleTaskClick}
            />

            <ContentViewer
                task={selectedTask}
                open={isViewerOpen}
                onOpenChange={setIsViewerOpen}
            />
        </div>
    );
};

export default ContentTasks;