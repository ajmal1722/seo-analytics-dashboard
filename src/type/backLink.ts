export type BacklinkStatus = "Todo" | "In Progress" | "Completed";
export type BacklinkPriority = "Low" | "Medium" | "High";

export interface BacklinkTask {
    id: string;
    task: string;
    url: string;
    dueDate: string;
    priority: BacklinkPriority;
    status: BacklinkStatus;
    assignee: string;
}