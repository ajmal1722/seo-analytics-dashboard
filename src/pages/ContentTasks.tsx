import { useState } from "react";
import TitleCard from "@/components/shared/TitleCard";
import ContentTaskTable from "@/components/contentTasks/ContentTaskTable";
import ContentViewer from "@/components/contentTasks/ContentViewer";
import { contentTasks } from "@/data/contentTasks";
import type { ContentTask } from "@/type/contentTask";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const ContentTasks: React.FC = () => {
    const [selectedTask, setSelectedTask] = useState<ContentTask | null>(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const handleTaskClick = (task: ContentTask) => {
        setSelectedTask(task);
        setIsViewerOpen(true);
    };

    return (
        <div>
            <TitleCard
                title="Content Tasks"
                description="Manage your content calendar, drafts, and publication schedule."
                action={
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> New Content
                    </Button>
                }
            />

            <ContentTaskTable
                tasks={contentTasks}
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