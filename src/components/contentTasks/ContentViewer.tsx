import type { ContentTask } from "@/type/contentTask";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface Props {
    task: ContentTask | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ContentViewer: React.FC<Props> = ({ task, open, onOpenChange }) => {
    if (!task) return null;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-xl md:max-w-2xl p-6">
                <SheetHeader className="mb-6">
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <Badge variant="secondary">{task.type}</Badge>
                            <Badge variant="outline">{task.priority}</Badge>
                        </div>

                        <SheetTitle className="text-2xl">
                            {task.title}
                        </SheetTitle>

                        <SheetDescription className="text-sm text-muted-foreground">
                            Assigned to {task.assignee} · Due {task.dueDate}
                        </SheetDescription>
                    </div>
                </SheetHeader>

                <div className="space-y-6">
                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
                        <div>
                            <p className="text-xs text-muted-foreground">Slug</p>
                            <p className="text-sm font-medium break-all">{task.slug}</p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">Target Keyword</p>
                            <p className="text-sm font-medium">{task.targetKeyword}</p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">Word Count</p>
                            <p className="text-sm font-medium">{task.wordCount}</p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">Status</p>
                            <p className="text-sm font-medium">{task.status}</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="mb-2 text-lg font-semibold">
                            Content Body
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {task.content}
                        </p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ContentViewer;
