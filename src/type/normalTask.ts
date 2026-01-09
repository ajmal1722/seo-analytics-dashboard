export type TaskPriority = 'Low' | 'Medium' | 'High';
export type TaskStatus = 'Todo' | 'In Progress' | 'Completed';

export interface NormalTask {
    id: string;
    task: string;
    category: string;
    dueDate: string;
    priority: TaskPriority;
    status: TaskStatus;
    assignee: string;
}
