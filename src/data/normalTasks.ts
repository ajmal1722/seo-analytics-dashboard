import type { NormalTask } from "../type/normalTask";

export const normalTasks: NormalTask[] = [
    {
        id: "1",
        task: "Update Team Roster",
        category: "HR",
        dueDate: "2026-01-12",
        priority: "High",
        status: "Todo",
        assignee: "Alice Manager"
    },
    {
        id: "2",
        task: "Weekly Server Maintenance",
        category: "IT",
        dueDate: "2026-01-15",
        priority: "Medium",
        status: "In Progress",
        assignee: "Bob DevOps"
    },
    {
        id: "3",
        task: "Client Meeting Preparation",
        category: "Sales",
        dueDate: "2026-01-10",
        priority: "High",
        status: "Completed",
        assignee: "Charlie Sales"
    },
    {
        id: "4",
        task: "Order Office Supplies",
        category: "Admin",
        dueDate: "2026-01-20",
        priority: "Low",
        status: "Todo",
        assignee: "Diana Admin"
    },
    {
        id: "5",
        task: "Q1 Financial Report",
        category: "Finance",
        dueDate: "2026-02-01",
        priority: "High",
        status: "Todo",
        assignee: "Eve Finance"
    }
];
