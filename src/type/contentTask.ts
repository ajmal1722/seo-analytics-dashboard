export type ContentType = 'Blog' | 'Landing Page' | 'Social Post' | 'Email';
export type ContentStatus = 'Draft' | 'Review' | 'Published' | 'Planned';
export type ContentPriority = 'Low' | 'Medium' | 'High';

export interface ContentTask {
    id: string;
    title: string;
    type: ContentType;
    status: ContentStatus;
    priority: ContentPriority;
    dueDate: string;
    slug: string;
    wordCount: number;
    targetKeyword: string;
    content: string; // Mock content body
    assignee: string;
}
